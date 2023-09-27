import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Name']
const data = [{ Name: 'Cupcake' }, { Name: 'Donut' }]
function Language() {
  return (
    <>
      <Borders statusText='language' columns={columns} data={data} />
    </>
  )
}

export default Language
