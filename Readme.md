# Live Demo

## Story

### Teaser

- Ragnar got new employee benefits
- he registers for all insurance portals
- one fails with "try later or call us"

### At Camutual

- Laura is responsible for the portal
- Mitch is responsible for automation implementation

## Automate

- start form
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
- hang on e-mail
  ```
  Hi ${name},


  Sorry for the delay, we're working on getting your account set-up as soon as possible.
  
  Stay tuned,
  Camutual.
  ```

## Cases

- smooth run
  - Cool Ragnar
  - 123-45-6789
- manual check needed
  - Sus Ragnar
  - 012-34-5678
- malformed
  - Typo Ragnar
  - 123-45_6789
- malformed and manual check needed
  - Protective Ragnar
  - XXX-XX-1234