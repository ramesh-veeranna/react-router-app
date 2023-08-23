import React from 'react'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

function TopSellings() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchKey = searchParams.get('search')
    const searchHandler = () => {
        console.log(`Search: ${searchKey}`)
    }
    const products = [
        {
            _id: 34,
            title: 'iPhone 16 Pro Max'
        },
        {
            _id: 78,
            title: 'Google Pixel 7 Pro'
        },
        {
            _id: 93,
            title: 'SAMSUNG Galaxy S32 Ultra'
        },
        {
            _id: 25,
            title: 'One Plus 11R 5G'
        },
        {
            _id: 84,
            title: 'Redmi Note 12 5G'
        }
    ]
    return (
        <div>
            <button className='float-end mx-2' onClick={searchHandler}>Search</button>
            <input type='search' className='float-end' placeholder='Search' value={searchKey ?? ''} onChange={e => setSearchParams({search: e.target.value})} />
            <h4>Top sellings { searchKey ? `| Search: ${searchKey}` : null }</h4>
            <hr />

            <div className='row mt-4'>
                <div className='col-3'>
                    <div className="list-group">
                        {products.map((item) => {
                            return (<NavLink className="list-group-item list-group-item-action" to={`/products/top-sellings/product/${item._id}`} key={item._id}>{item.title}</NavLink>)
                        })}
                    </div>
                </div>
                <div className='col-9'>
                    <Outlet />
                </div>
            </div>
            
        </div>
    )
}

export default TopSellings
