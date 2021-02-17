const {
    Client,
    Variables,
    logger
} = require("camunda-external-task-client-js");

const config = {
    baseUrl: "http://localhost:8080/engine-rest",
    use: logger,
};

const client = new Client(config);


client.start();
client.subscribe("check_ssn", async ({ task, taskService }) => {
    let ssn = task.variables.get("ssn");

    console.log(`Picked up ${ssn}`);

    let malformed = ! /^\d{3}-?\d{2}-?\d{4}$/.test(ssn);
    let record_found = ssn.charAt(0) != '0';

    console.log(`  malformed: ${malformed}`);
    console.log(`  record_found: ${record_found}`);

    if (malformed) {
        await taskService.handleFailure(task, {
            errorMessage: "malformed SSN"
        });
    } else {
        const processVariables = new Variables();
        processVariables.set("record_found", record_found);

        console.log(`  complete with ${processVariables}`);
        await taskService.complete(task, processVariables);
    }
});