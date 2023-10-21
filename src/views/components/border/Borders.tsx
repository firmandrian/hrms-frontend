import React from 'react'

//komponen MUI
import Box from '@mui/material/Box'

//import file
import BordersBox from './BordersBox'
import FormDatePicker from '../form/pickers/FormDatePicker'

interface BordersProps {
  columns?: string[]
  data?: any[]
  showDatePicker?: boolean
  showBordersBox?: boolean
  statusText: string
  children: React.ReactNode
  defaultFromDate?: string
  defaultToDate?: string
  useDefaultValue?: boolean
}
export default function Borders(props: BordersProps) {
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: '#0000',
          height: 'auto',
          width: 'auto',
          border: '1px solid #248AAF',
          // marginTop: '10px',
          marginBottom: '15px'
        }}
      >
        {/* Box di dalam Box */}
        {props.showBordersBox && <BordersBox statusText={props.statusText} columns={props.columns} data={props.data} />}

        {/* memanggil datepicker di menu tertentu saja  */}
        {props.showDatePicker && (
          <FormDatePicker
            defaultFromDate={props.defaultFromDate}
            defaultToDate={props.defaultToDate}
            useDefaultValue={props.useDefaultValue}
          />
        )}

        {/* props.children untuk memanfaatkan semua yang dimasukan ke dalam pembuka dan 
        penutup pada component border sebagai parent nya */}
        {props.children}
      </Box>
    </React.Fragment>
  )
}
