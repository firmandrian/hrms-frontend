import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Employment Status', 'Position']
const data = [
  { 'Employment Status': 'Abdul', Position: 'Admin' },
  { 'Employment Status': 'Rian', Position: 'HR' },
  { 'Employment Status': 'Rian 2', Position: 'Admin' },
  { 'Employment Status': 'Adit', Position: 'Admin' },
  { 'Employment Status': 'Mz Ai', Position: 'Admin' },
  { 'Employment Status': 'Soleh', Position: 'Bapaknya adit' },
  { 'Employment Status': 'Halimah', Position: 'HR' }
]

function EmployeeStatus() {
  return (
    <>
      <Borders
        statusText='employment status'
        columns={columns}
        data={data}
        showBordersBox={true}
        showModals={true}
        showForm={true}
        showPagination={true}
        showSelect={true}
      />
    </>
  )
}

export default EmployeeStatus
