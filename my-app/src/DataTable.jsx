import { render } from '@testing-library/react';
import React, { useEffect } from 'react'
const DataTable = props => {


    const {items } = props;
    return(
<div>
    <th>UserName</th>
      <th>name</th>
      <th>email</th>
      {
				items.map((item) => (
          <tr> 
            <td>{item.username}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
				
				))
			}
</div>
    );
   
    
}

export default DataTable;
