import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "../../api/graphql/resolvers/Hello";
import { ApolloServer } from "apollo-server-express";
import { Application} from 'express';

const graphqlConfig = async (app: Application ): Promise<void> => {
	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloWorldResolver],
			emitSchemaFile: true,
		}),
		context: ({ req, res }) => ({ req, res }),
		playground: true,
	});

	apolloServer.applyMiddleware({ app });
};
export default graphqlConfig;
