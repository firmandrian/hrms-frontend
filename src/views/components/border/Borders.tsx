import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TableReusable from 'src/views/components/table/TableReusable'

export default function Borders() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container> */}
      <Box
        sx={{
          bgcolor: '#0000',
          height: '70vh',
          width: 'auto',
          border: '1px solid',
          marginTop: '10px',
          marginBottom: '15px'
        }}
      >
        {/* Box di dalam Box */}
        <Box
          sx={{
            bgcolor: '#248AAF', // Warna latar belakang box dalam
            height: '7%' // Ukuran tinggi box dalam
            // border: "1px solid red",  // Border untuk box dalam
          }}
        >
          (icon tar dlu gampang)
        </Box>
        {/* memanggil tabel kedalam borders */}
        <TableReusable />
      </Box>
      {/* </Container> */}
    </React.Fragment>
  )
}
