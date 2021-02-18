# Live Demo

## Story

### Teaser

- *Roy slide*
- Roy got new employee benefits
- he registers for all insurance portals
- one fails with "try later or call us"
- Roy is frustrated
- Roy calls "Camutual Dental Care" and complains
- ideally, he would talk to Jen
- *Jen slide*
- *Moss slide*


### At Camutual

- let's be part of Jen's and Moss's life for a couple of days
- slide Jen: Moss, our process is not optimal, as a user it feels like this:
- *show Cawemo, as-is diagram*
- (*Cawemo, pandemic no big deal, collaborate from home*)
- *Jen models the as-is process*
- slide both: I'm down
- slide Jen: pain points
- *Jen and Moss model the new version*
  - *Wait: do a milestone"
  - *without timer event sub-process*
  - *milestone: ready for automation*
- slide: rolls up sleeves
- Moss asks his colleagues to create microservices for SSN check and sending e-mails
  - We already did! Check Cawemo
  - Moss checks templates in Cawemo
- *download to Modeler*

## Automate

- change Process Name
- start form (it's an MVP, integration wih Portal via REST later)
  - name
  - email
  - ssn
- investigate form
  - name
  - ssn
  - identity_ok
  - reason
- welcome e-mail
  ```
  Hi ${name},

  Happy to have you!

  Sincerely,
  Camutual
  ```
- sorry e-mail
  ```
  Hi ${name},

  against all odds, we were not able to register you.

  Reason: ${reason}

  Bye
  ```
- *start Camunda as container*

## Cases

- smooth run
  - Cool Roy
  - 123-45-6789
  - *check mail*
- manual check needed
  - Sus Roy
  - 012-34-5678
  - *check tasklist*
  - *check mail*
- malformed
  - Typo Roy
  - 123-45_6789
  - *check cockpit and correct SSN*
  - *check mail*
- malformed and manual check needed
  - Protective Roy
  - XXX-XX-1234
  - *check cockpit*
  - *check tasklist*
  - *check mail*

## Back at Camutual

- *check Cawemo, add milestone*
- slide Jen: Recap pain points
- slide facepalm
- *Cawemo*
- Jen: let's inform the user whenever manual checking is needed
- *model*
- Moss: But technical issues cause delays as well
- Jen: what about an Event Subprocess to cover all cases of delays?
- *model*

## Automate

- hang on e-mail
  ```
  Hi ${name},


  Sorry for the delay, we're working on getting your account set-up as soon as possible.
  
  Stay tuned,
  Camutual.
  ```
- *deploy*
- malformed again
  - Typo Roy
  - 123-45_6789
  - *check cockpit and correct SSN*
  - *check mails*

So the happy ending is: Everybody loves Camunda. And healthy teeth.
