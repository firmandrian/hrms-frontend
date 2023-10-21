// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Stack from '@mui/material/Stack'

interface TextareaProps {
  width?: string
  marginTop?: string
  height?: string
  marginLeft?: string
  marginButtom?: string
  marginRight?: string
  showParagrafLeft?: boolean
  text?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
const TextareaBasic = (props: TextareaProps) => {
  return (
    // <form noValidate autoComplete='off'>
    <Stack spacing={2} direction='row'>
      {props.showParagrafLeft && (
        <p style={{ marginLeft: '30px', marginTop: '5px', fontSize: '14px', marginRight: '46px' }}>{props.text}</p>
      )}
      <Grid item>
        <Typography sx={{ mb: 2, fontWeight: 500 }}>Maximum Rows</Typography>
        <TextareaAutosize
          style={{ width: '500px' }}
          maxRows={4}
          aria-label='maximum height'
          //   placeholder='Maximum 4 rows'
          //   defaultValue='Cupcake ipsum dolor sit amet wafer halvah ice cream. Macaroon bear claw pudding cheesecake. Chupa chups powder soufflé powder.'
          value={props.value}
          onChange={props.onChange}
        />
      </Grid>
    </Stack>
    // </form>
  )
}

export default TextareaBasic
