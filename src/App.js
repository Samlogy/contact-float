import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AiFillMessage } from 'react-icons/ai'

import './style.css';

const App = () => {
  const [contact, setContact] = useState({ email: '', subject: '', message: '' });
  const [form, setForm] = useState({ show: false });

  const Contact = e => {
    e.preventDefault();

    console.log(contact)
  };

  return (
    <div className="contact-float-container">
      <div className={form.show ? 'contact-box' : 'contact-box-hide'}>
        <div className='contact-box-header'> 
            <h5> Moderator name </h5>
            <GrFormClose className='icon' onClick={() => setForm({...form, show: false })} />
        </div>

        <hr />

        <div className='contact-box-body' onSubmit={Contact}> 
            <form method='POST'>
                <input type='email' name='email' value={contact.email} placeholder='Email'
                        onChange={e => setContact({...contact, email: e.target.value})} />

                <input type='text' name='subject' value={contact.subject} placeholder='Subject'
                        onChange={e => setContact({...contact, subject: e.target.value})} />

                <textarea name='message' value={contact.message} placeholder='Message'
                        onChange={e => setContact({...contact, message: e.target.value})}></textarea>
            </form>
        </div>

        <hr />

        <div className='contact-box-footer'> 
            <button className='btn btn-accent' onClick={(e) => Contact(e)}> Send </button>
        </div>
      </div>

      <button className='btn btn-icon' onClick={() => setForm({...form, show: !form.show })}>
        { form.show ? <GrFormClose /> : <AiFillMessage /> }
      </button>
    </div>
  );
}


export default App;