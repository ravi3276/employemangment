import { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Header from './components/Header';
import List from './components/List';
import employeeData from './data/emp.js';

function App() {
  const [isAddItem, setIsAddItem] = useState(false)
  const [isEditItem, setIsEditItem] = useState(false)
  const [selectEmp, setSelectEmp] = useState(null)
  const [employee, setEmployee] = useState(employeeData)

  const handleEdit = (id) => {
    let newEditEmp =  employee.filter(item => item.id === id)
    setSelectEmp(newEditEmp)
    setIsEditItem(true)
  }
  const handleDelete=(id)=>{
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(result => {
      if (result.value) {
          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });

          setEmployee(employee.filter(employee => employee.id !== id));
      }
  });
  }
  return (
    <div className="App">
      {
        !isAddItem && !isEditItem && (
          <>
          <Header setIsAddItem={setIsAddItem}/>
          <List employee={employee} setIsEditItem={setIsEditItem} handleEdit={handleEdit} handleDelete={handleDelete}/>
          </>
        )
      }
      {
        isAddItem && (<Add employee={employee} setIsAddItem={setIsAddItem}/>)
      }
      {
        isEditItem && (<Edit employee={employee} setEmployee={setEmployee} selectEmp={selectEmp} setIsEditItem={setIsEditItem}/>)
      }
    </div>
  );
}

export default App;
