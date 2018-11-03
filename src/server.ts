import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Action, useExpressServer } from 'routing-controllers';
import { createConnection } from "typeorm";
import * as morgan from 'morgan';
import chalk from 'chalk';

import { UserController } from './controllers/UserController';

const app = express();
createConnection().then(connection => {
  console.log('Connection established');
  return;
}).catch(error => console.log(error));

app.use(morgan(function (tokens, req, res) {
  return `${chalk.blue(tokens.method(req, res))} ${chalk.green(tokens.url(req, res))} ${chalk.red(tokens['response-time'](req, res))}`;
})) 

useExpressServer(app, {
  routePrefix: '/api/v1',
  controllers: [
    UserController,
  ],
});

// run express application on port 3000
app.listen(3000);
console.log("App running on port 3000!");
