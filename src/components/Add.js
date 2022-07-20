import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

function Add({employee,setIsAddItem}) {

  const inputFocus=useRef(null)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");


  const addEmployee=(e)=>{
    e.preventDefault();
    if(firstName.trim()==="" || lastName.trim()==="" || email.trim()==="" || salary.trim()==="" || date.trim()===""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
      })
    }
  let id = employee.length + 1;

  let newEmployee = {
     id,
      firstName,
      lastName,
      email,
      salary,
      date
  }
  employee.push(newEmployee);

    setIsAddItem(false);
    if(firstName || lastName || email || salary || date){
      Swal.fire({
        icon: 'success',
        title: 'Added...',
        text: `${firstName} ${lastName}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  useEffect(() => {
    inputFocus.current.focus();
  }, [])
  return (
    <div className="small-container">
       <form onSubmit={addEmployee}>
      <h1>Add Employe</h1>
        <label htmlFor="firstName">First Name</label>
        <input type="text" ref={inputFocus} value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/> 
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        <label htmlFor="salary">Salary</label>
        <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)}/> 
        <label htmlFor="date">Date</label>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/> 
        <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAddItem(true)}
                    />
                </div>
       </form>
    </div>
  )
}

export default Add