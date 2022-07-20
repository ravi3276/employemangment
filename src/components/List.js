import React from 'react'

function List({employee, setIsEditItem,handleDelete,handleEdit}) {
  return (
    <div className="contain-table">
        <table className="striped-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>salary</th>
                    <th>date</th>
                    <th colSpan={2} className="text-center">actions</th>
                </tr>
            </thead>
            <tbody>
                {employee.length > 0 ? (
                    employee.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.salary}</td>
                            <td>{item.date}</td>
                            <td className="text-right">
                                <button onClick={()=>handleEdit(item.id)}>edit</button>
                            </td>
                            <td className="text-left">
                                <button onClick={()=>handleDelete(item.id)}>delete</button>
                            </td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={7}>No data</td>
                    </tr>
                )}
            </tbody>

                
        </table>
    </div>
  )
}

export default List
