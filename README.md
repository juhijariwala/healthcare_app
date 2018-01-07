# National Healthcare Provider Search Application
This is search application to find Global healthcare providers.

#### Tools
* Express: Api server
* MongoDb: Database
* React: JavaScript framework
* enzyme, mocha and chai : Testing
* AWS: Deployment

#### Start API server
```
  npm install
  npm start
```
Above command will start the API server on [http://localhost:3001](http://localhost:3001).

#### Start React Client Application
```
 cd client
 npm install
 npm start
```
Above command will start the Web app on [http://localhost:3000](http://localhost:3000).

#### Run tests
```
 cd client
 npm tests
```

#### Search Provider API
```
curl -i -H "Accept: application/json" \\
/providers?max_discharges=5&min_discharges=6&max_average_covered_charges=50000 \\
&min_average_covered_charges=40000&min_average_medicare_payments=6000 \\
&max_average_medicare_payments=10000&state=GA
```
Run above command to search provider through API

