import React from 'react';
import './app.css';
import Header from './header'
import client from '../client/client'
import Products from './products'
import Product from './product';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

	return (
		<ApolloProvider client={client}>
			<Router>
				<Header siteTitle="Effem Products Demo" />
				<div class='main'>
					<h2>This is dynamic GraphQL API example. </h2>
					<p>Data is pulled from a Federated GQL Gateway based on NodeJS framework/Apollo server.</p>

					<Route path="/:id">
						<Product />
					</Route>
					<Route exact path="/">
						<Products />
					</Route>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;