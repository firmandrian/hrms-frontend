import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Department_Name', 'Parent']
const data = [
  { Department_Name: 'Admin', Parent: 'administration' },
  { Department_Name: 'Accounts', Parent: 'NON-IT' }
]
export default function Department() {
  return (
    <>
      <Borders
        statusText='department'
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
