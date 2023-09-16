import React, { useRef } from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

function ContactList(props) {

    console.log(props);
    const inputEl = useRef("");

    const deletContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deletContactHandler} key={contact.id} />
        );
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    }

    return (
        <div className='main'>
            <h2>Contact List
                <Link to="/add">
                    <button className='ui primary button right floated'>Add Contact</button>
                </Link>
            </h2>
            <div className='ui search'>
                <div className='ui icon input'>
                    <input ref={inputEl} type="text" placeholder='Search Contact' className='prompt' value={props.term} onChange={getSearchTerm} />
                    <i className='search icon' />
                </div>
            </div>
            <div className='ui sortable padded red celled table'>
                <thead>
                    <tr><th className='six wide'>Name</th>
                        <th className='six wide'>Email</th>
                        <th className='six wide'>Phone</th>
                        <th className='six wide'>Edit</th>
                        <th className='six wide'>Delete</th>
                    </tr></thead>
                {renderContactList.length > 0 ? renderContactList : "No Contacts available"}
            </div>
        </div>
    )
}
export default ContactList
