import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const ChangeName = () => {
    const [changedName, setChangeName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type: 'CHANGE_NAME',
            payload: changedName
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Change Name" value={changedName} onChange={e => setChangeName(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}

export default ChangeName
