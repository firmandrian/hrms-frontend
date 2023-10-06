import React from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/material/TextareaAutosize'

interface TextareaProps {
  width?: string
  marginTop?: string
  height?: string
  marginLeft?: string
  marginButtom?: string
  marginRight?: string
  showParagrafLeft?: boolean
  text?: string
}

export default function Textarea(props: TextareaProps) {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.showParagrafLeft && (
          <p style={{ marginLeft: '30px', marginTop: '5px', fontSize: '14px', marginRight: '46px' }}>{props.text}</p>
        )}
        <Grid item>
          <TextareaAutosize
            style={{
              width: props.width,
              marginTop: props.marginTop,
              height: props.height,
              marginLeft: props.marginLeft,
              marginRight: props.marginRight
            }}
            maxRows={4}
            aria-label='maximum height'
          />
        </Grid>
      </Stack>
    </>
  )
}
