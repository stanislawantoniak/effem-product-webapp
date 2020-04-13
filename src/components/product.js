import React from "react"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link,useParams } from "react-router-dom";

const PRODUCT = gql`
 			 query Product($id: ID!) {
			    product(id: $id) {
			   		id
			    	name
					description
					brand
			    	SAPProductTitle
					retailPrice
			    	digitalAssets {
			    	  url
			    	}
			  	}  
			  }`;

const Product = () => {

	let { id } = useParams();

	console.log('id: ', id);

	const { loading, error, data } = useQuery(PRODUCT, { variables: { id } });

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :( </p>;
	console.log('error: ', error)

	return (
		<div>
			<h2><Link to='/'>Go Back</Link></h2>
			<h3>Product Details</h3>
			<table>
				<tbody>
					<tr key={data.product.id}>
						<td>Id</td>
						<td>{data.product.id}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Name</td>
						<td>{data.product.name}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Brand</td>
						<td>{data.product.brand}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Retail price</td>
						<td>{data.product.retailPrice}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Description</td>
						<td>{data.product.description}</td>
					</tr>
					<tr key={data.product.id}>
						<td>SAP Product Title</td>
						<td>{data.product.SAPProductTitle}</td>
					</tr>
				</tbody>
			</table>
			<div>
				<h3>Digital Assets</h3>
				<div>
					{data.product.digitalAssets.map((asset) => (
						<div class='imgContainer'>
							<div>{asset.name}</div>
							<div>
								{!asset.url.endsWith('jpg') ?
									<iframe
										src={asset.url.replace('http', 'https')}
										title="Salsify Viedo"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										frameBorder="5"
										width="500"
										height="500"
										webkitallowfullscreen="false"
										mozallowfullscreen="false"

									/>
									: <img src={asset.url.replace('http', 'https')}></img>
								}
							</div>
							<hr />
						</div>
					))
					}
				</div>
			</div>
		</div>
	);
}

export default Product;