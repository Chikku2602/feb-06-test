import logo from './logo.svg';
import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
 
 function App() {
   const [formData, setFormData] = useReducer(formReducer, {});
   const [submitting, setSubmitting] = useState(false);
 
   const handleSubmit = event => {
     event.preventDefault();
     setSubmitting(true); 
   }
 
   const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }
 
   
 
   return(
     <div className="wrapper">
       <h1>Registration Form</h1>
       {submitting &&
         <div>
           Your login details is as follows:
           <ul>
             {Object.entries(formData).map(([name, value]) => (
               <li key={name}><strong>{name}</strong>: {value.toString()}</li>
             ))}
           </ul>
         </div>
       }
       <form onSubmit={handleSubmit}>
         <fieldset>
           <label>
           <p>First Name</p>
           <input className="input" name="Firstname" onChange={handleChange}/>
           <p>Last Name</p>
             <input className="input" name="Lastname" onChange={handleChange}/>
           </label>
         <label>
          <p>Email</p>
         <input name="Email" className="input" onChange={handleChange}/>
          </label>
          <label>
          <p>Phone</p>
             <input name="Phone"className="input" onChange={handleChange}/>
          </label>
          <label>
            <p>Course Choose</p>
            <select name="Course Choose" onChange={handleChange}>
                <option value="">--Please select your Course--</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="SpringBoot">SpringBoot</option>
            </select>
          </label>
         
          <p>Select any one course...</p>
          <label className='Basic' className="input">
            HTML<input type="checkbox" name="HTML" onChange={handleChange} />
            CSS<input type="checkbox" name="CSS" onChange={handleChange} />
            JavaScript<input type="checkbox" name="JavaScript" onChange={handleChange} />
            Java<input type="checkbox" name="Java" onChange={handleChange} />
          </label>
        </fieldset>
         <button type="submit">Register</button>
       </form>
     </div>
   )
 }
 

export default App;
