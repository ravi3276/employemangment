import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employee, setEmployee, selectEmp, setIsEditItem }) {
  const inputFocus=useRef(null)
  let id = selectEmp[0].id;
  const [firstName, setFirstName] = useState(selectEmp[0].firstName);
  const [lastName, setLastName] = useState(selectEmp[0].lastName);
  const [email, setEmail] = useState(selectEmp[0].email);
  const [salary, setSalary] = useState(selectEmp[0].salary);
  const [date, setDate] = useState(selectEmp[0].date);

  useEffect(() => {
    inputFocus.current.focus();
  }, [])

  const handleEdit=(e)=>{
      e.preventDefault();

      if (!firstName || !lastName || !email || !salary || !date) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }

    let editEmpl={
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };
    for (let i = 0; i < employee.length; i++) {
         if(employee[i].id===id){
          employee.splice(i, 1, editEmpl);
         }
  }

      setEmployee(employee);
      setIsEditItem(false);
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
        showConfirmButton: false,
        timer: 1500
    });
  }
  return (
    <div className="small-container">
       <form onSubmit={handleEdit}>
      <h1>Edit Employe</h1>
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditItem(true)}
                    />
                </div>
       </form>
    </div>
  )
}

export default Edit