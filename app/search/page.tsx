'use client'

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import CardSearch from '../../components/cardSearch';

const client = new ApolloClient({
  uri: '/api/', // Your GraphQL endpoint
  cache: new InMemoryCache(),
});

function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Card Search</h1>
        <CardSearch />
      </div>
    </ApolloProvider>
  );
}

export default Home;