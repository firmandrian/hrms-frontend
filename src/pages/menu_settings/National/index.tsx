import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Nationality']
const data = [{ Nationality: 'Cupcake' }, { Nationality: 'Donut' }]
function National() {
  return (
    <>
      <Borders statusText='nationalities' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}

export default National
