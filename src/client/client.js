import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
	uri: 'https://effem-gql-gateway-dev.herokuapp.com',
	headers: {authorization: 'Bearer effem_admin'} 
});

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
	name: 'EffemWebApp'
});

export default client