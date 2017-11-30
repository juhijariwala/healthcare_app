var express = require('express');
var router = express.Router();
var Provider = require('../model/providers');

router.use(function timeLog(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

	res.setHeader('Cache-Control', 'no-cache');
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!' });
});

router.route('/providers')

	.get(function(req, res) {

		const searchByParams = req.query;
		var matchBy = {};
		if(searchByParams.min_discharges) matchBy['min_discharges'] = parseInt(searchByParams.min_discharges);
		if(searchByParams.max_discharges) matchBy['max_discharges'] = parseInt(searchByParams.max_discharges);
		if(searchByParams.min_average_covered_charges) matchBy['min_average_covered_charges'] = parseInt(searchBy.min_average_covered_charges);
		if(searchByParams.max_average_covered_charges) matchBy['max_average_covered_charges'] = parseInt(searchBy.max_average_covered_charges);
		if(searchByParams.min_average_medicare_payments) matchBy['min_average_medicare_payments'] = parseInt(searchBy.min_average_medicare_payments);
		if(searchByParams.max_average_medicare_payments) matchBy['max_average_medicare_payments'] = parseInt(searchBy.max_average_medicare_payments);
		if(searchByParams.state) matchBy['Provider State'] = searchByParams.state;
		console.log(matchBy);

		Provider
			.aggregate([{
					$group: {
						_id: '$Provider Id',
						'Provider Name': { $first: '$Provider Name' },
						'Provider Street Address': { $first: '$Provider Street Address' },
						'Provider City': { $first: '$Provider City' },
						'Provider State': { $first: '$Provider State' },
						'Provider Zip Code': { $first: '$Provider Zip Code' },
						'Hospital Referral Region Description': { $first: '$Hospital Referral Region Description' },
						'Total Discharges': { $first: '$Total Discharges' },
						'Average Covered Charges': { $first: '$Average Covered Charges' },
						'Average Total Payments': { $first: '$Average Total Payments' },
						'Average Medicare Payments': { $first: '$Average Medicare Payments' },
						max_discharges: { $max: '$Total Discharges' },
						min_discharges: { $min: '$Total Discharges' },
						max_average_covered_charges: { $max: '$Average Covered Charges' },
						min_average_covered_charges: { $min: '$Average Covered Charges' },
						max_average_medicare_payments: { $max: '$Average Medicare Payments' },
						min_average_covered_charges: { $min: '$Average Medicare Payments' }
					}
				},
				{
					"$match": {
						$and: [
							matchBy
						]
					}
				}
			], function(err, providers) {
				if(err)
					res.send(err);
				res.json(providers)
			});
	})

module.exports = router;
