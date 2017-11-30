'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 039 - EXTRACRANIAL PROCEDURES W/O CC/MCC,10001,SOUTHEAST ALABAMA MEDICAL CENTER,1108 ROSS CLARK CIRCLE,DOTHAN,AL,36301,AL - Dothan,91,$32963.07,$5777.24,$4763.73
var ProvidersSchema = new Schema({
  DRGDefinition : String,
  providerId : Number,
  providerName: String,
  providerStreetAddress: String,
  providerCity: String,
  providerState: String,
  providerZipCode: Number,
  hospitalReferralRegionDescription: String,
  totalDischarges: Number,
  averageCoveredCharges: String,
  averageTotalPayments: String,
  averageMedicarePayments: String
});
//export our module to use in server.js
module.exports = mongoose.model('Provider', ProvidersSchema);
