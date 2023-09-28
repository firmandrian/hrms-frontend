import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name', 'Calories', 'Fat', 'Carbs', 'Protein']
const data = [
  { Name: 'Cupcake', Calories: 305, Fat: 3.7, Carbs: 67, Protein: 4.3 },
  { Name: 'Donut', Calories: 452, Fat: 25.0, Carbs: 51, Protein: 4.9 }
]
export default function Autograph() {
  return (
    <>
      <Borders statusText='autograph' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}
