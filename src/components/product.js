import React from "react"
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link,useParams } from "react-router-dom";
import SEO from './seo'

const PRODUCT = gql`
 	query Product($id: ID!) {
	    product(id: $id) {
	   		id
	    	name
			description
			brand
	    	SAPProductTitle
			retailPrice
		   	reviewStats {
    			averageRating
			    ratingRange
    			reviewCount
    			recommendedCount
    			notRecommendedCount
    		}
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
			<SEO title={'Product '+data.product.id} />
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
			<h3>Review stats</h3>
			<table>
				<tbody>
					<tr key={data.product.id}>
						<td>Average rating/range</td>
						<td>{data.product.reviewStats.averageRating} / {data.product.reviewStats.ratingRange}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Reviews #</td>
						<td>{data.product.reviewStats.reviewCount}</td>
					</tr>
					<tr key={data.product.id}>
						<td>Positive/negative reviews #</td>
						<td>{data.product.reviewStats.recommendedCount} / {data.product.reviewStats.notRecommendedCount}</td>
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
										title="Salsify Video"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										frameBorder="5"
										width="500"
										height="500"
										webkitallowfullscreen="false"
										mozallowfullscreen="false"

									/>
									: <img src={asset.url.replace('http', 'https')} alt={data.product.name}></img>
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