import React from 'react'
import Borders from 'src/views/components/border/Borders'
import FormDatePickerProps from 'src/views/components/form/FormDatePickerProps'

const columns = ['Payroll Period', 'Attendance Cut-off', 'Pay Out Date']
const data = [
  {
    'Payroll Period': 'Cupcake',
    'Attendance Cut-off': <FormDatePickerProps />,
    'Pay Out Date': <FormDatePickerProps />
  },
  { 'Payroll Period': 'Donut', 'Attendance Cut-off': <FormDatePickerProps />, 'Pay Out Date': <FormDatePickerProps /> }
]
function CutOff() {
  return (
    <>
      <Borders
        statusText='cut-off period'
        // showDatePickerFrom={true}
        // showDatePickerTo={true}
        showDatePicker={true}
        columns={[]}
        data={[]}
        showPagination={false}
        showModals={false}
        showBordersBox={true}
      />
      <Borders statusText='cut-off period' columns={columns} data={data} showBordersBox={false} />
    </>
  )
}

export default CutOff
