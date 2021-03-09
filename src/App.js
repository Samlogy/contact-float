import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import './style.css';

const App = () => {
  const [contact, setContact] = useState({ email: '', subject: '', message: '', checked: true });

  return (
    <div className="contact-float-container">
      <div className='contact-box'>
        <div className='contact-box-header'> 
            <h5> Moderator name </h5>
            <GrFormClose className='icon' />
        </div>

        <div className='contact-box-body'> 
            <form method='POST'>
                <input type='text' name='email' value={contact.email} placeholder='Email'
                        onChange={e => setContact({...contact, email: e.target.value})} />

                <input type='text' name='email' value={contact.email} placeholder='Email'
                        onChange={e => setContact({...contact, email: e.target.value})} />

                <input type='text' name='email' value={contact.email} placeholder='Email'
                        onChange={e => setContact({...contact, email: e.target.value})} />

                <textarea name='email' value={contact.email} placeholder='Email'
                        onChange={e => setContact({...contact, email: e.target.value})}></textarea>
            </form>
        </div>

        <div className='contact-box-footer'> 
            <button className='btn'> Send </button>
        </div>
      </div>
    </div>
  );
}


export default App;