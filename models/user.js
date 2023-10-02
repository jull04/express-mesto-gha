const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    minlength: [2, 'Минимально количесвто символов - 2'],
    maxlength: [30, 'Максимальное количесвто символов - 30'],
  },
  about: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    minlength: [2, 'Минимально количесвто символов - 2'],
    maxlength: [30, 'Максимальное количесвто символов - 30'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле должно быть заполнено'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Неверный URL',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
