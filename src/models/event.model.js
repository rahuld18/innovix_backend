const mongoose = require('mongoose');

const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      required: true,
      
     
    },
    category: {
      type: String,
      required: true,
     
    },
    photos: {
      type: Array,
      
    },
    timezone: {
        type: String,
        
      },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);



// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
