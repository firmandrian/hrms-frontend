import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Termination() {
  return (
    <>
      <Borders statusText='termination reasons' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}

export default Termination
