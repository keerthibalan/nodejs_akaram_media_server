# nodejs_akaram_media_server
This repository is responsible for building akaram media app backend services
# Prerequstics
NodeJs , yarn , mongoose, Mongodb server

# install Nodejs
Download the nodejs package and install in windows
https://nodejs.org/en/download 

# setup
The npm init command in the JSON language creates a package.json file for your project’s frontend. A package.json file is a file that contains information about the project’s packages 
and dependencies. It also contains metadata for the project such as version number, author, and description.

run npm init
# install express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love

npm i express
# install mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js 

npm i mongoose
# install nodeman
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

npm i nodeman

# install dotenv

Loads environment variables from .env file

npm i dotenv

# Start the application
npm start

# Application port
5000
http://localhost:5000

# install CORS package

The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application

 npm i cors


 # install JWT package

 JWTs are credentials, which can grant access to resources. Be careful where you paste them! We do not record tokens, all validation and debugging is done on the client side.

 HEADER:ALGORITHM & TOKEN TYPE
{
  "alg": "HS256",
  "typ": "JWT"
}

PAYLOAD:DATA

{
  "username": "keerthibalan",
  "name": "Keerthibalan",
  "date": ISODate String
}

VERIFY SIGNATURE
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  
your-256-bit-secret

)

 npm i jsonwebtoken
