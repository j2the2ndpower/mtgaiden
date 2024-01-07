import { ApolloServer } from '@apollo/server';
import typeDefs from '@/api/graphql/cards.gql';
import { resolvers } from '@/api/resolvers/cards'
import { pool } from '@/api/database/database';
import { startServerAndCreateNextHandler } from '@/api/startServerAndCreateNextHandler';

const apolloServer = new ApolloServer({
    typeDefs, resolvers,
    plugins: [{
        async serverWillStart() {
            return {
                async serverWillStop() {
                    pool.end(function (err) {
                        if (err) {
                          console.log('Error closing the pool: ' + err.message);
                        } else {
                          console.log('Pool closed');
                        }
                    });
                }
            }
        }
    }]
});

export default startServerAndCreateNextHandler(apolloServer);
