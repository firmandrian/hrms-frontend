import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name', 'Description']
const data = [
  { Name: 'Cupcake', Description: 305 },
  { Name: 'Donut', Description: 452 }
]
function Skill() {
  return (
    <>
      <Borders statusText='skill' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}

export default Skill
