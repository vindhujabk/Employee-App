import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployeeContext } from './EmployeeContext';

export default function EmployeeDashboard() {

    const { employeeData,updateEmployeeData } = useEmployeeContext();
    const [editableRow, setEditableRow] = useState(null);
    const [localData,setLocalData] =useState(employeeData);
    const navigate = useNavigate();

    const handleAdd = () => {
            navigate('/addemployees')
        }

    const handleEdit = (index) => {
        setEditableRow(index);
        
    }

    const handleDelete = (index) => {
        const updatedData = [...localData];
        updatedData.splice(index,1);
        setLocalData(updatedData);  //update local data
        
    }

    const handleInputChange = (index,field,value) =>{
            const updatedData=[...localData];
            updatedData[index][field]=value;
            setLocalData(updatedData);
        }

    const handleSave = () => {
        updateEmployeeData(localData);   //update the context with localdata
        setEditableRow(null)
    }

    return (
        <div>
            <h2 className='table-head'>Employee Dashboard</h2>
            <table className='employee-table-container'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through employeeData to display rows*/}
                    {localData.map((employee, index) => (
                        <tr key={index}>
                            <td>
                                {editableRow === index ? (
                                    <input type="text" value={employee.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} />
                                ) : (
                                    employee.name
                                )}
                            </td>
                            <td>
                                {editableRow === index ? (
                                    <input type="email" value={employee.email} onChange={(e) => handleInputChange(index, 'email', e.target.value)} />
                                ) : (
                                    employee.email
                                )}
                            </td>
                            <td>
                                {editableRow === index ? (
                                    <input type="text" value={employee.designation} onChange={(e) => handleInputChange(index, 'designation', e.target.value)} />
                                ) : (
                                    employee.designation
                                )}
                            </td>
                            <td>
                                <button onClick={(e) => handleEdit(index,e)}>Edit</button>
                                <button onClick={(e) => handleDelete(index,e)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='button-container'>
                <button onClick={handleAdd} className='btn-add'>Add</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}