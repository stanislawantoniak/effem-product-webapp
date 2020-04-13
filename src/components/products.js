import { Component } from "react"
import React from "react"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const PRODUCTS = gql`
  {
    products {
      id
      brand
    }
  }
`;

const products = () => {
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
 
export default products;