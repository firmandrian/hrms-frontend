import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name', 'Description']
const data = [
  { Name: 'Cupcake', Description: 305 },
  { Name: 'Donut', Description: 452 }
]
function CutOff() {
  return (
    <>
      <Borders
        statusText='cut-off period'
        showDatePicker={true}
        columns={[]}
        data={[]}
        showPagination={false}
        showModals={false}
        showBordersBox={true}
      />
      <Borders statusText='cut-off period' columns={columns} data={data} showBordersBox={false} />
    </>
  )
}

export default CutOff
