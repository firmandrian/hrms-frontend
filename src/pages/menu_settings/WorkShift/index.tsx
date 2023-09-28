import React from 'react'
import Borders from 'src/views/components/border/Borders'
import ColorPicker from 'src/views/components/colorPicker/ColorPicker'

const columns = ['ShiftCode', 'From', 'To', 'Hours', 'Color']
const data = [
  { ShiftCode: 'Cupcake', From: 305, To: 3.7, Hours: 67, Color: <ColorPicker /> },
  { ShiftCode: 'Donut', From: 452, To: 25.0, Hours: 51, Color: <ColorPicker /> }
]

export default function WorkShift() {
  return (
    <>
      <Borders statusText='work shifts' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}
