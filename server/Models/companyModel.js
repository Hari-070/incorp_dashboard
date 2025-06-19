const mongoose=require('mongoose')

// Subschema: Event inside each service
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  eventDate: { type: Date, required: true },
  time: { type: String, required: true }
});

// Subschema: Service with status and events
const ServiceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started'
  },
  events: [EventSchema]
});

// Subschema: Director
const DirectorSchema = new mongoose.Schema({
  directorName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  nationality: { type: String, required: true }
});

// Main Company Schema
const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  companyRegNo:{type: Number, required: true, unique: true},
  companyJurisdiction: {type: String, required: true},
  services: [ServiceSchema],
  directors: [DirectorSchema],
  agent: {type:String, required:true},
}, {
  timestamps: true
});

const Company = mongoose.model('Company', CompanySchema);
module.exports=Company
