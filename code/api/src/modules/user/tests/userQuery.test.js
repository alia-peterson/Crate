import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';


describe('user queries', async (done) => {
  let server = express();

  beforeAll(() => {
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  });
});