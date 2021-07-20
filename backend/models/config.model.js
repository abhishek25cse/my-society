const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const configSchema = new Schema({
  code: { type: String, required: true },
  desc: { type: String, required: true },
  type: { type: String, required: true }
}, {
  timestamps: true,
});

const Config = mongoose.model('Config', configSchema);

module.exports = Config;