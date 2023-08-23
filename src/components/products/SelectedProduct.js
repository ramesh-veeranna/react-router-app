import React from 'react'
import { useParams } from 'react-router-dom'

function SelectedProduct() {
    const {id} = useParams() // id variable is from the path 
    // const params = useParams()
    // const id = params.id
    // above code and commented code both are same 
  return (
    <div>
      <h4>Selected Product: {id}</h4>
    </div>
  )
}

export default SelectedProduct
