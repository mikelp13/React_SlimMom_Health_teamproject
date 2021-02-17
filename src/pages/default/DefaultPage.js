import React from 'react'
import { Link } from 'react-router-dom'

const DefaultPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p><Link to="/">Ccылка</Link> на главную
      страницу.</p>
        </div>
    )
}

export default DefaultPage
