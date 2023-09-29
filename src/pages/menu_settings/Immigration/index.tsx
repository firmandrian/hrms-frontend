import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Immigration() {
  return (
    <>
      <Borders
        statusText='immigration issuer'
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

export default Immigration
