import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useState } from 'react'

export default function Paginations() {
  const [color, setColor] = useState(false)

  const handleFirstPageClick = () => {
    //fungsi ini untuk mengatur halaman menjadi halaman pertama
  }

  const handleLastPageClick = () => {
    //fungsi ini untuk mengatur halaman menjadi halaman terakhir
  }

  return (
    <Stack spacing={2} direction='row' alignItems='center'>
      <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '69rem' }}>
        <Fab variant='extended' size='small' style={{ fontSize: '12px' }}>
          {/* <NavigationIcon sx={{ mr: 1 }} /> */}
          First
        </Fab>
      </Box>

      <Pagination
        count={2}
        color='primary'
        style={{
          marginLeft: 'auto' // Mengatur pagination ke sebelah kanan
        }}
      />
      <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '50rem' }}>
        <Fab variant='extended' size='small' style={{ fontSize: '12px' }}>
          {/* <NavigationIcon sx={{ mr: 1 }} /> */}
          Last
        </Fab>
      </Box>
    </Stack>
  )
}
