import React, { useState } from 'react';
import './App.css';
import Studentslist from './Components/Studentslist';
import AddStudent from './Components/AddStudent';

function App() {
  let studentsList = [
    {id: 101, firstName: "Swarna", lastName: "dhir"},
    {id: 102, firstName: "Sony", lastName: "dhir"},
    {id: 103, firstName: "Roshan", lastName: "dhir"}
    ]

    const[students, setStudents] = useState(studentsList)

    const addStudent = (arg) => {
      // add student here....
      setStudents([...students, arg])
    }


  return (
    <div>
      <Studentslist list={students}/>
      <AddStudent addStudent={addStudent}/>
    </div>
    
  );
}

export default App;
