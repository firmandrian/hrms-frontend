// import React from 'react'
// import FormDatePicker from './FormDatePicker'

// interface FormDatePickerProps {
//   showDatePickerFrom?: boolean
//   showDatePickerTo?: boolean
// }
// export default function FormDatePickerProps(props: FormDatePickerProps) {
//   return (
//     <>
//       {props.showDatePickerFrom && (
//         <div style={{ marginLeft: '4px' }}>
//           <FormDatePicker label='From' />
//         </div>
//       )}
//       {props.showDatePickerTo && (
//         <div style={{ marginLeft: '10px' }}>
//           <FormDatePicker label='to' />
//         </div>
//       )}
//     </>
//   )
// }

import React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function FormDatePickerProps() {
  const tomorrow = dayjs().add(1, 'day')
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DateTimePicker', 'TimePicker', 'DateRangePicker']}>
        <div style={{ width: '200px', marginLeft: '10px' }}>
          <DemoItem>
            <DatePicker defaultValue={tomorrow} views={['year', 'month', 'day']} />
          </DemoItem>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  )
}
