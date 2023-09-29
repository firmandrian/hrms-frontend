import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Holiday_2() {
  return (
    <>
      <Borders key={1} statusText='holiday' showDatePicker={true} columns={[]} data={[]} showBordersBox={true} />
      <Borders
        key={2}
        statusText='holiday data'
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

export default Holiday_2
