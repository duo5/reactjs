import React, { Component } from 'react';

class StudentRow extends Component{
render(){
    const student = this.props.student;
    return (<tr>
        <td>{student.student_name}</td>
        <td>{student.adress}</td>
        <td>{student.email}</td>
        <td>{student.phone}</td>
        <td>{student.gender}</td>
    </tr>);
}
}

export default StudentRow;