import React, {useState} from 'react'
import {useLocation} from'react-router-dom';
import {useNavigate} from 'react-router-dom';

function EditContact(props) {
    
    const navigate = useNavigate();
    let location = useLocation();
    const {id, name, email,phone} = location.state.contact;
    const [User, setUser] = useState({id,name,email,phone});

    
    
    
    let update = (e) => {
        e.preventDefault();
        if(User.name === "" || User.email === "" || User.phone === ""){
            alert("All fields are mandatory!!!");
            return
        }
        // THIS IS USED TO SHOW THE LIST DATA ON THE APP.JS FILE 
        props.updateContactHandler(User);
        // THIS IS USED FOR WHEN THE ADD BUTTON IS PRESSED THE INPUT FILED AGAIN GETS EMPTY
        setUser({name:"", email:"",phone:""});
        //console.log(props);
        navigate('/');
    }
    
    return (
        <div className='ui main'>
            <h2>Edit Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" name="Name" placeholder='Name' value={User.name} onChange={e => setUser({...User, name: e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder='Email' value={User.email} onChange={e => setUser({...User, email: e.target.value})}/>
                </div>
                <div className='field'>
                    <label>phone</label>
                    <input type="text" name="phone" placeholder='phone' value={User.phone} onChange={e => setUser({...User, phone: e.target.value})}/>
                </div>
                <button className='ui orange button'>Update</button>
            </form>
        </div>
    )
}

export default EditContact
