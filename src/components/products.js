import React from "react"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";
import SEO from './seo'

const PRODUCTS = gql`
  query Products { 
    	products {
      		id
      		brand
	  	name
    	}
    }
`;

const Products = () => {
	const { loading, error, data } = useQuery(PRODUCTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<SEO title='Products' />
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Brand</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{data.products.map(({ id, brand, name }) => (
						<tr key={id}>
							<td><Link to={id}>{id}</Link></td>
							<td>{brand}</td>
							<td>{name}</td>

						</tr>
					))
					}
				</tbody>
			</table>
		</div>
	);
}

export default Products;