import Email from '../models/email';

export default {
  register(req, res) {
    console.log(1111, req.body);
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
};
