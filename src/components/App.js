import React from 'react';
import './App.css';
import Header from './header'
import client from '../client/client'
//import Products from './products'
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const PRODUCTS = gql`
  {
    products {
      id
      brand
    }
  }
`;

function renderProducts() {
	const { loading, error, data } = useQuery(PRODUCTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return data.products.map(({ id, brand, name }) => (
		<div key={id} >
			<p>
				{id}:{brand}:{name}
			</p>
		</div>
	));
}

function App() {
	return (
		<div className="App">
			<Header siteTitle="Effem products demo" />
			<ApolloProvider client={client}>
				{ renderProducts()}
			</ApolloProvider>
		</div>
	);
}

export default App;
