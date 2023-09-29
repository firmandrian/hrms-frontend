import React from 'react'
import Borders from 'src/views/components/border/Borders'

const columns = ['Job Title', 'Job Description']
const data = [
  { 'Job Title': 'Administrative Assistant', 'Job Description': '' },
  { 'Job Title': 'Administrative Supervisor', 'Job Description': '' },
  { 'Job Title': 'Cleaner', 'Job Description': '' },
  { 'Job Title': 'HR Officer', 'Job Description': '' },
  { 'Job Title': 'HR Supervisor', 'Job Description': '' }
]

function Job() {
  return (
    <>
      <Borders
        statusText='job titles'
        columns={columns}
        data={data}
        showBordersBox={true}
        showModals={true}
        showForm={true}
        showPagination={true}
        showSelect={true}
        showDatePicker={false}
      />
    </>
  )
}
export default Job
