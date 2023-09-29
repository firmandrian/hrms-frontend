import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Level']
const data = [{ Level: 'Cupcake' }, { Level: 'Donut' }]
function Education() {
  return (
    <>
      <Borders
        statusText='Education'
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

export default Education
