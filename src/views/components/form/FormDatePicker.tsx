import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const tomorrow = dayjs().add(1, 'day')

export default function FormDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DateTimePicker', 'TimePicker', 'DateRangePicker']}>
        <div style={{ width: '210px', marginLeft: '10px' }}>
          <DemoItem>
            <div style={{ display: 'flex' }}>
              <span style={{ marginRight: '10px', marginTop: '15px' }}>From</span>
              <DatePicker defaultValue={tomorrow} views={['year', 'month', 'day']} />
            </div>
          </DemoItem>
          <div style={{ marginTop: '10px' }}>
            <DemoItem>
              <div style={{ display: 'flex' }}>
                <span style={{ marginRight: '30px', marginTop: '15px' }}>To</span>
                <DatePicker defaultValue={tomorrow} views={['year', 'month', 'day']} />
              </div>
            </DemoItem>
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  )
}
