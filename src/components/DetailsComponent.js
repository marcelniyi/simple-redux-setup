import React from 'react'
import { useSelector } from 'react-redux'

const DetailsComponent = () => {
    const state = useSelector(state => state.user)

    return (
        <div>

            <h1>Welcome {state.name} </h1>
            <p>Email: {state.email}</p>
            <p>Phone Number: {state.phone}</p>
        </div>
    )
}

export default DetailsComponent