/* eslint-disable no-unused-vars */

const nodemailer = require('nodemailer');

exports.Mailer = class Mailer {
  constructor (app) {
    this.app = app;
  }
  async create (data) {

    try {

      let transporter = nodemailer.createTransport(this.app.get('feathers-mail').smtp);

      let info = await transporter.sendMail(data);

      return info.messageId;


    } catch (e) {

      throw new Error(e);

    }


  }
};
