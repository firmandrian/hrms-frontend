import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name', 'Position']
const data = [
  { Name: 'Cupcake', Position: 305 },
  { Name: 'Donut', Position: 452 }
]
export default function Autograph() {
  return (
    <>
      <Borders
        statusText='autograph'
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
