import * as React from 'react'

//import komponen MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'

//import file ButtonModal
import ButtonModal from '../button/ButtonComponent'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
        <ButtonModal
          onAddClick={handleOpen}
          backgroundColor='#3CBC8D'
          text='Add'
          width='55px'
          fontSize='14px'
          border='1px solid'
          height='40px'
          textTransform='none'
          marginTop='0px'
        />
        <ButtonModal
          onAddClick={handleOpen}
          backgroundColor='#E9422E'
          text='Delete'
          width='70px'
          fontSize='14px'
          border='1px solid'
          height='42px'
          textTransform='none'
          marginTop='10px'
        />
      </Stack>
      {/* komponen modal MUI di sini */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {/* sampai sini komponen modal */}
    </div>
  )
}
