import React, { useRef, useState } from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

function ContactList(props) {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (column) => {
        if (sortBy === column) {
            // If already sorted by this column, toggle the order
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // If sorting a new column, set it as the sorting column
            setSortBy(column);
            setSortOrder('asc'); // Default to ascending order
        }
    };

    const sortedContacts = [...props.contacts];

    if (sortBy) {
        sortedContacts.sort((a, b) => {
            const valueA = a[sortBy];
            const valueB = b[sortBy];

            if (sortOrder === 'asc') {
                return valueA.localeCompare(valueB);
            } else {
                return valueB.localeCompare(valueA);
            }
        });
    }


    const inputEl = useRef("");

    const deletContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = sortedContacts.map((contact) => {
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
                    <tr><th onClick={() => handleSort('name')} className='six wide'>Name  {sortBy === 'name' && (
                        <i className={`sort ${sortOrder === 'asc' ? 'down' : 'up'} icon`} />
                    )}</th>
                        <th onClick={() => handleSort('email')} className='six wide'>Email  {sortBy === 'email' && (
                            <i className={`sort ${sortOrder === 'asc' ? 'down' : 'up'} icon`} />
                        )}</th>
                        <th onClick={() => handleSort('phone')} className='six wide'>Phone  {sortBy === 'phone' && (
                            <i className={`sort ${sortOrder === 'asc' ? 'down' : 'up'} icon`} />
                        )}</th>
                        <th className='six wide'>Edit</th>
                        <th className='six wide'>Delete</th>
                    </tr></thead>
                {renderContactList.length > 0 ? renderContactList : "No Contacts available"}
            </div>
        </div>
    )
}
export default ContactList
