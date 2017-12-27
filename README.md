# Sample Node.js Express Client-Server App

This is a sample single-page application written in TypeScript using
the Node.js Express framework.

The client-side code is packaged using webpack.  Webpack makes it possible to use
import statements - to import your own modules or npm modules.

Debugging works on both the client and the server.

This is not a "best practices" showcase - it's just to show how TypeScript
code is packaged to run in a browser and makes a trivial Ajax call to the server.

## Code Structure

The code is in src.  Inside src, there are the following subfolders:
* backend: server-side code
* common: code shared between the client and server
* client: client-side code (Javascript and PUG files)

## Building and Running the Application
* install node >= 8
* clone the code
* cd node-express-client-server-example
* npm install
* ./node_modules/.bin/webpack
* ./node_modules/.bin/tsc
* node src/server/bin/www.js
* In browser, open [localhost:3000](http://localhost:3000)
 
## Additional Notes

The TypeScript configuration is in tsconfig.json and targets es6.  To run
in older browsers, you can specify a different target in webpack.config.js - in
this example, we use compilerOptions to target es5.  You could even target the ancient
es3 standard.
