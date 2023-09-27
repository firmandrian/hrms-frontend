import * as React from 'react'

//komponen MUI
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'

export default function Paginations() {
  return (
    // grid untuk seluruh komponen pagination
    <Grid
      container
      spacing={2}
      justifyContent={'flex-end'}
      marginTop={'10px'}
      marginLeft={'-20px'}
      marginBottom={'15px'}
    >
      {/* grid untuk pagination first  */}
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
        {/* komponen pagination dari MUI */}
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

      {/* grid untuk komponen pagination last  */}
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
