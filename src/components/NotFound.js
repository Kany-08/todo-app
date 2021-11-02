import React from 'react'
import {Link} from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to="/"><img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" width="400"/> </Link>
        </div>
    )
}