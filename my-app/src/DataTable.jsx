import { render } from '@testing-library/react';
import React, { useEffect } from 'react'
import './App.css';


const DataTable = props => {


    const {items } = props;
   
    return(
<div>
    <table>
        <tbody>
    <th>UserName</th>
      <th>name</th>
      <th>email</th>
      {
				items.map((item) => (
          <tr> 
            <th>{item.username}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
          </tr>
				
				))
			}
            </tbody>
            </table>
</div>
    );
   
    
}

export default DataTable;
