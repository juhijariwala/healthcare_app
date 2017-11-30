# National Healthcare Provider Search Application
This is search application to find Global healthcare providers.

#### Tools used
* React : Javascript framework
* Axios: bind HTTP methods to communicate with our database.
* Express: provide a framework to set up our Node.js server.
* Foreman: allows us to boot up our API and webpack-dev-server simultaneously.
* Nodemon: watches our server.js file for changes, then restarts it.
* Mongoose: abstracts away the MongoDB boilerplate for a simple Schema solution
* MongoDB: database
* Heroku: to host application

#### Start Application locally
```
  npm install
  npm run start-dev
```

Above command will start the Web app on [http://localhost:3000](http://localhost:3000) and API server on [http://localhost:3001](http://localhost:3001).

#### Search Provider API
```
curl -i -H "Accept: application/json" \\
/providers?max_discharges=5&min_discharges=6&max_average_covered_charges=50000 \\
&min_average_covered_charges=40000&min_average_medicare_payments=6000 \\
&max_average_medicare_payments=10000&state=GA
```
Run above command to search provider through API
