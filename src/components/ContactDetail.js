import React, { useEffect, useState } from 'react'
import {Link,useParams} from'react-router-dom';
import user from '../images/user.jpg';
import api from "../api/contacts";

const ContactDetail = () => {
    const { id } = useParams();
    const [User, setUser] = useState({id:"",name:"",email:"",phone:""});
    useEffect(() => {
        const retriveContact = async () => {
            const response = await api.get(`/contacts/${id}`);
           setUser(response.data)
          }
          retriveContact();
    }, []);

    return (
        <div className='main'>
            <div className='ui center aligned card'>
                <div className='image'>
                    <img src={user} alt='user'></img>
                </div>
                <div className='content'>
                    <div className='header'>{User.name}</div>
                    <div className='description'>{User.email}</div>
                    <div className='description'>{User.phone}</div>
                </div>
            </div>
            <Link to="/">
                <div className='center div'>
                    <button className='ui secondary button center aligned '>Contact List</button>
                </div>
            </Link>
        </div>
    )
}

export default ContactDetail
