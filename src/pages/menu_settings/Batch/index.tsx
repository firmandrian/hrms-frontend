import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Batch() {
  return (
    <>
      <Borders statusText='batch' columns={columns} data={data} />
    </>
  )
}

export default Batch
