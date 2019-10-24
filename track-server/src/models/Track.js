const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  timestamps: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    HTMLHeadingElement: Number,
    speed: Number
  }
});

const TrackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  locations: [PointSchema]
});

mongoose.model('Track', TrackSchema);
