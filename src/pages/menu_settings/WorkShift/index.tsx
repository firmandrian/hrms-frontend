import React from 'react'
import Borders from 'src/views/components/border/Borders'
import ColorPicker from 'src/views/components/colorPicker/ColorPicker'

const columns = ['Shift Code', 'From', 'To', 'Hours', 'Color']
const data = [
  { 'Shift Code': 'Cupcake', From: 305, To: 3.7, Hours: 67, Color: <ColorPicker /> },
  { 'Shift Code': 'Donut', From: 452, To: 25.0, Hours: 51, Color: <ColorPicker /> }
]

export default function WorkShift() {
  return (
    <>
      <Borders
        statusText='work shifts'
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
