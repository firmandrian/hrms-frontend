import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TableReusable from 'src/views/components/table/TableReusable'
import Select from '../select/Select'
import Paginations from '../pagination/Paginations'
import ButtonAdd from '../button/ButtonAdd'
import Form from '../form/Form'
import { BsGrid3X3GapFill } from 'react-icons/bs'

interface Data {
  statusText: string
}
export default function Borders(props: Data) {
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
        <Box
          sx={{
            bgcolor: '#248AAF', // Warna latar belakang box dalam
            height: '50px' // Ukuran tinggi box dalam
          }}
        >
          <div
            style={{
              padding: '13px',
              color: '#FFFFFF',
              fontFamily: 'Lato,"Helvetica Neue",Arial,sans-serif',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            <BsGrid3X3GapFill style={{ marginRight: '10px', marginBottom: '-1px' }} />
            {/* panggil props untuk status text borders dengan upercase */}
            {props.statusText.toLocaleUpperCase()}
          </div>
        </Box>
        {/* Memanggil komponen Button save dan delete */}
        <ButtonAdd />
        {/* Memanggil komponen Form */}
        <Form />
        {/* memanggil tabel kedalam borders */}
        <TableReusable />
        {/* memanggil select kedalam borders */}
        <Select />
        {/* memanggil pagination kedalam borders */}
        <Paginations />
      </Box>
      {/* </Container> */}
    </React.Fragment>
  )
}
