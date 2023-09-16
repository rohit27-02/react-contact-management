import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function ContactCard(props) {

    const navigate = useNavigate();
    const { id, name, email, phone } = props.contact;
    return (

        <tr >
            <td onClick={() => { navigate(`/contact/${id}`) }} data-label="Name">{name}</td>
            <td onClick={() => { navigate(`/contact/${id}`) }} data-label="email">{email}</td>
            <td onClick={() => { navigate(`/contact/${id}`) }} data-label="phone">{phone}</td>
            <td data-label="edit">
                <Link to={`/edit`} state={{ contact: props.contact }}>
                    <i className='edit alternate outline icon right floated'
                        style={{ color: "blue", fontSize: "20px" }}
                    >
                    </i>
                </Link></td>
            <td data-label="delete">
                <i className='trash alternate outline icon right floated'
                    style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}
                    onClick={() => props.clickHandler(id)}
                >
                </i></td>
        </tr>


    )
}

export default ContactCard
