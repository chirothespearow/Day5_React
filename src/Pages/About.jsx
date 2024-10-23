import React from 'react'
import CustomButton from '../Components/CustomButton'
import "../Assets/CSS/bar.css"
const About = () => {
  const user = {
    name : "Ritvik Rao",
    empId : "1232",
    org : "Deloitte",
    position : "intern",
    email : "ritrao@xyz.com"
  }
  return (
    <div>
        <h1>Welcome to the About Page</h1>
        <table>
          <tr>
        <th>Name</th><th> {user.name}</th>
        </tr>
        <tr>
        <th>employee ID</th><th> {user.empId}</th>
        </tr>
        <tr>
        <th>Organization</th><th> {user.org}</th>
        </tr>
        <tr>
        <th>Position</th><th> {user.position}</th>
        </tr>
        <tr>
        <th>Email</th><th> {user.email}</th>
        </tr>
        </table>
    </div>

    
  )
}

export default About