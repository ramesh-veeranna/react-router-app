import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
  return (
    <div>
      <h4>Page Not Found</h4>
            <hr />
            <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default NotFound
