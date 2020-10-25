# feathers-mail

> Simple Feathers mailer service using [`nodemailer`](https://github.com/nodemailer/nodemailer)
>
>For security, the Mail service has been set up to only work internally, under service name _mailer

## Installation

```shell
npm install feathers-mail --save
```

## How to use

#### In your config file (eg config/default.json) add
```js
  "feathers-mail": {
    "host": "smtp.host.here",
    "secure": true,
    "auth": {
      "user": "smtp@email.here",
      "pass": "replacewithpassword"
    }
  }
```
More smtp settings available here [`https://nodemailer.com/smtp/`](https://nodemailer.com/smtp/)


####Install plugin globally
#####add in app.js after "app.configure(channels);"
```js
// mailer plugin
app.configure(require('feathers-mail'));
```

#### Example to call Mailer from another service

```js
    try {
        await app.service('_mailer').create({
                from: "sender@server.com",
                to: "receiver@sender.com",
                subject: "Message title",
                text: "Plaintext version of the message",
                html: "<p>HTML version of the message</p>"
        });
    } catch (error) {
  
      //do something with error    

    }
```

Node Mailer message settings [`https://nodemailer.com/message/`](https://nodemailer.com/message/)

## License

Copyright (c) 2020

Licensed under the [MIT license](LICENSE).
