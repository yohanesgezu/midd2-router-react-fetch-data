
//import "./styles.css";
import axios from 'axios'
import { useState, useEffect } from 'react';

function Teacher() {
  const[data, setData] = useState([])

  const fetch =() => {
    axios.get('http://127.0.0.1:8000/midd1/TeacherList/')
    .then((res) => setData(res.data))
    .then(err => console.log(err))
  }
  useEffect(()=>{
    fetch();
  },[])
  const Deletes= (id)=>{
    axios.delete(`http://127.0.0.1:8000/TeacherDelete/${id}`).then((Response)=>
    alert(" are you share ?").fetch()).catch((err)=>console.log(err))
  }
  return (
  <div>
    <p className='aa'>TeacherList/Mid Exam</p>
    {data.map((res) => {
      return (

      <div className='ab'>
       <p className='fname'>FirstName:  {res.firstName}</p>
       <p className='lname'>LarstName:  {res.lastName}</p>
       <p className='salary'>Salary :      {res.TeacherSalary}</p>
       <button onClick={()=>Deletes(res.id)}>delete</button>
      </div> 
      
      )
    })}
         
  </div>
  );
}

export default Teacher;