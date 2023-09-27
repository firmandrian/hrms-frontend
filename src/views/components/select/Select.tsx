import React from 'react'
export default function Select() {
  return (
    <div
      style={{
        fontSize: '14px',
        fontFamily: 'Lato,"Helvetica Neue",Arial,sans-serif',
        marginLeft: '5px',
        padding: '10px'
      }}
    >
      <label htmlFor='selectBox'> Show </label>
      <select id='selectBox'>
        <option value='option1'>10</option>
        <option value='option2'>20</option>
        <option value='option3'>50</option>
        <option value='option3'>100</option>
        <option value='option3'>1000</option>
      </select>
      <label htmlFor='selectBox'> entries per page</label>
    </div>
  )
}
