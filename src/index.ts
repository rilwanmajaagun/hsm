import 'reflect-metadata';
import * as express from 'express';
import connect2db from './db/setUp';
import graphqlConfig from './config/graphql';

const port = process.env.Port || 4000;
const app = express();

graphqlConfig(app)
connect2db().then(() => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
}).catch((error) => {
  console.log(error);
});

export default app;
