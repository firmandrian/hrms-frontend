import * as React from 'react'

//komponen MUI
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

//import file
import TableReusable from 'src/views/components/table/TableReusable'
import Select from '../select/Select'
import Paginations from '../pagination/Paginations'
import Form from '../form/Form'
import Modals from '../modal/Modals'
import BordersBox from './BordersBox'
import FormDatePicker from '../form/FormDatePicker'
// import FormDatePickerProps from '../form/FormDatePickerProps'

// tipe data yang dikirim dari props borders
interface Data {
  statusText: string
}

//menggabungkan props borders statusText kedalam props borderprops untuk menampilkan data tabel
interface BordersProps extends Data {
  columns: string[]
  data: any[]
  showDatePicker?: boolean
  showPagination?: boolean
  showModals?: boolean
  showSelect?: boolean
  showForm?: boolean
  showBordersBox?: boolean
  showDatePickerFrom?: boolean
  showDatePickerTo?: boolean
}
export default function Borders(props: BordersProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container> */}
      <Box
        sx={{
          bgcolor: '#0000',
          height: 'auto',
          width: 'auto',
          border: '1px solid #248AAF',
          marginTop: '10px',
          marginBottom: '15px'
        }}
      >
        {/* Box di dalam Box */}
        {props.showBordersBox && <BordersBox statusText={props.statusText} columns={props.columns} data={props.data} />}

        {/* memanggil datepicker di menu tertentu saja  */}
        {props.showDatePicker && <FormDatePicker />}
        {/* <FormDatePickerProps showDatePickerFrom={props.showDatePickerFrom} showDatePickerTo={props.showDatePickerTo} /> */}
        {/* Memanggil komponen Button save dan delete */}
        {props.showModals && <Modals />}
        {/* Memanggil komponen Form */}
        {props.showForm && <Form />}
        {/* memanggil tabel kedalam borders */}
        <TableReusable columns={props.columns} data={props.data} />
        {/* memanggil select kedalam borders */}
        {props.showSelect && <Select />}
        {/* memanggil pagination kedalam borders */}
        {props.showPagination && <Paginations />}
      </Box>
      {/* </Container> */}
    </React.Fragment>
  )
}
