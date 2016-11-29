import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({uri: 'http://localhost:3001'});

const client = new ApolloClient({
  networkInterface,
  reduxRootSelector: 'root'
});

export default client;
