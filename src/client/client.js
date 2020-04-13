import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://effem-gql-gateway-dev.herokuapp.com?accessToken=effem_playground',
});

export default client