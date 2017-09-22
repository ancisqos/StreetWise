var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var IncidentSchema = new Schema({

    HarassmentType: {
        type: String,
        required: true
    },
    Location: {
        Longitude: {
            type: Number,
            required: true
        },
        Latitude: {
            type: Number,
            required: true
        }
    },
    DateTime: {
        type: Date,
        default: Date.now,
        required: true
    },

    Description: {
        type: String,
        required: false
    },

    id: {
        type: Schema.Types.ObjectId,
        ref: "IncidentID"
    }
});

var Incident = mongoose.model("Incident", IncidentSchema);

module.exports = Incident;