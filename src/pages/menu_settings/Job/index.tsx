import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['JobTitle', 'JobDescription']
const data = [
  { JobTitle: 'Administrative Assistant', JobDescription: '' },
  { JobTitle: 'Administrative Supervisor', JobDescription: '' },
  { JobTitle: 'Cleaner', JobDescription: '' },
  { JobTitle: 'HR Officer', JobDescription: '' },
  { JobTitle: 'HR Supervisor', JobDescription: '' }
]

function Job() {
  return (
    <>
      <Borders statusText='job titles' columns={columns} data={data} showBordersBox={true}/>
    </>
  )
}
export default Job
