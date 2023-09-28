import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Holiday_2() {
  return (
    <>
      <Borders statusText='holiday' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}

export default Holiday_2
