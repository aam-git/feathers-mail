# feathers-mail

> Simple Feathers mailer service using [`nodemailer`](https://github.com/nodemailer/nodemailer)

## Installation

```shell
npm install feathers-mail --save
```

## How to use

#### In your config file (eg config/default.json) add
```js
  "smtp": {
    "host": "smtp.host.here",
    "secure": true,
    "auth": {
      "user": "smtp@email.here",
      "pass": "replacewithpassword"
    }
  }
```
More smtp settings available here [`https://nodemailer.com/smtp/`](https://nodemailer.com/smtp/)


####At the top of src/services/index.js add
```js
const mailer = require('feathers-mailer');
```

####In the function in src/services/index.js add
```js
app.configure(mailer);
```


#### Example to call from another service

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
