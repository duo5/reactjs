import React, { Component } from 'react';

class StudentGenderRow extends Component{
    render(){
        const gender = this.props.gender;
        return (<tr>
            <th colSpan="2">
              {gender}
            </th>
          </tr>);
    }
}

export default StudentGenderRow;