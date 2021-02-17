const {
  Client,
  logger
} = require("camunda-external-task-client-js");
const got = require("got");

require('dotenv').config();

const mailService = require('./_mailer.js');

const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
};

const client = new Client(config);

var emailServicehandler = async (task, taskService) => {
  let mailtext = task.variables.get("body");
  let subject = task.variables.get("subject");
  let email = task.variables.get("email");

  console.log(`Sending mail '${subject} to ${email}`);

  mailService.sendMail(subject, mailtext, email)
  .then(async () => await taskService.complete(task))
  .catch(async (err) => {
      console.log(err);
      await taskService.handleFailure(task, {
        errorMessage: err.message,
        errorDetails: err.stack,
        retries: 0,
        retryTimeout: 1000
      });
    });

}

client.start();
client.subscribe("send_email", async ({task, taskService}) => {
  emailServicehandler(task, taskService);
  await taskService.extendLock(task, 20 * second);
});
