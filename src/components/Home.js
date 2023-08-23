import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h4>Home Page</h4>
            <hr />
            <button onClick={() => navigate('/contact')}>Navigate to Contact Page</button>
            <button onClick={() => navigate('/something-went-wrong')}>Page Not Found</button>

        </div>
    )
}

export default Home
