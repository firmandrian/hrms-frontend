import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name', 'Position'] // Nama kolom
const data = [
  { Name: 'Abdul', Position: 'Admin' },
  { Name: 'Rian', Position: 'HR' },
  { Name: 'Rian 2', Position: 'Admin' },
  { Name: 'Adit', Position: 'Admin' },
  { Name: 'Mz Ai', Position: 'Admin' },
  { Name: 'Soleh', Position: 'Bapaknya adit' },
  { Name: 'Halimah', Position: 'HR' }
  // Tambahkan data lainnya sesuai kebutuhan
]

function EmployeeStatus() {
  return (
    <>
      <Borders statusText='employment status' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}

export default EmployeeStatus
