import Navbar from "./Navbar"
import Employee from "./pages/Employee"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"

import { Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </>
  )
}

export default App
