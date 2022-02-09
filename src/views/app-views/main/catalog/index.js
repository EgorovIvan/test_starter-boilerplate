import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './collections'
import AddProduct from './product'
import EditProduct from './categories'
import Orders from './combo'

const Ecommerce = props => {
  const { match } = props
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/product-list`} />
			<Route path={`${match.url}/product`} component={AddProduct} />
			<Route path={`${match.url}/categories`} component={EditProduct} />
			<Route path={`${match.url}/collections`} component={ProductList} />
			<Route path={`${match.url}/combo`} component={Orders} />
		</Switch>
	)
}

export default Ecommerce

