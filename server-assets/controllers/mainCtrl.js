import Email from '../models/email';

export default {
  register(req, res) {
    const newEmail = new Email(req.body);
    newEmail.save().then(response => {
      return res.send('email added');
    }).catch(err => {
      if (err.code === 11000) {
        return res.send('email already registered');
      }

      return res.status(500).json(err);
    });
  },

  getEmails(req, res) {
    Email.find().exec().then(emails => {
      return res.json(emails);
    }).catch(err => {
      return res.status(500).json(err);
    });
  },
};
