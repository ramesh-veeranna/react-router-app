import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h4>Product Page</h4>
            <hr />

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <NavLink to="/products/top-sellings" className="nav-link" >Top Sellings</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products/featured-products" className="nav-link">Featured Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products/combo-offers" className="nav-link">Comb Offers</NavLink>
                </li>
            </ul>
            <div className='mt-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Products
