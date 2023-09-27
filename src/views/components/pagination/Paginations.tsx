import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'

export default function Paginations() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'flex-end'}
      marginTop={'10px'}
      marginLeft={'-20px'}
      marginBottom={'15px'}
    >
      <Grid>
        {/* <Button
          variant='outlined'
          size='small'
          color='primary'
          style={{ height: '50px', textTransform: 'none', borderRadius: '50%' }}
        >
          First
        </Button> */}
        <Fab
          variant='extended'
          style={{
            height: '30px',
            textTransform: 'none',
            width: '30px',
            fontSize: '12px',
            fontFamily: 'Lato,"Helvetica Neue",Arial,sans-serif'
          }}
        >
          First
        </Fab>
      </Grid>
      <Grid>
        <Pagination
          count={2}
          // color='primary'
          sx={{
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#248AAF' // Warna latar belakang item halaman yang aktif
            },
            '& .MuiPaginationItem-page:hover': {
              backgroundColor: '#248AAF' // Warna latar belakang item halaman saat dihover
            }
          }}
        />
      </Grid>
      <Grid>
        {/* <Button
          variant='outlined'
          size='small'
          style={{ fontSize: '12px', height: '50px', textTransform: 'none', borderRadius: '50%' }}
        >
          Last
        </Button> */}
        <Fab
          variant='extended'
          style={{
            height: '30px',
            textTransform: 'none',
            width: '30px',
            fontSize: '12px',
            fontFamily: 'Lato,"Helvetica Neue",Arial,sans-serif'
          }}
        >
          Last
        </Fab>
      </Grid>
    </Grid>
  )
}
