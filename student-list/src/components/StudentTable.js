import React, { Component } from 'react';
import StudentGenderRow from './StudentGenderRow';
import StudentRow from './StudentRow';

class StudentTable extends Component{
render(){
    const rows1 = [];
    const rows2 = [];
    this.props.students.forEach(student => {
        if(student.gender === 'Male'){
        rows1.push(
            <StudentRow student={student} key={student.id} />
        );
        }
        else{
            rows2.push( <StudentRow student={student} key={student.id} />);
        }
    });

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
        <StudentGenderRow gender='Male' />
        {rows1}
        <StudentGenderRow gender='Female' />
        {rows2}
        </tbody>
      </table>
    );
}
}

export default StudentTable;