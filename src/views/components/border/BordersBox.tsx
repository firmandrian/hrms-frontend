import React from 'react'
import Box from '@mui/material/Box'
import { BsGrid3X3GapFill } from 'react-icons/bs'

interface Data {
  statusText: string
}

interface BordersProps extends Data {
  columns: string[]
  data: any[]
}
export default function BordersBox(props: BordersProps) {
  return (
    <>
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
    </>
  )
}
