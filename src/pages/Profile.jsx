import React from 'react'
import {useNavigate,useParams} from 'react-router-dom'

const Profile = () => {
const navigate = useNavigate()
const {username} =useParams()
    return (
        <div>
            <h1>Profile {username}</h1>
            <button onClick={()=>navigate('/about')}>Change to about page</button>
        </div>
    )
}

export default Profile
