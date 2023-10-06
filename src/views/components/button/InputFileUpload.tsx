import * as React from 'react'
// import Button from '@mui/joy/Button'
import Button from '@mui/material/Button'
import { styled } from '@mui/joy'
import Stack from '@mui/material/Stack'

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  position: absolute;
`

interface InputFileUploadProps {
  text?: string
  width?: string
  marginLeft?: string
  marginTop?: string
  showParagrafLeft?: boolean
  showParagrafButtom?: boolean
  showSpan?: boolean
  height?: string
  backgroundColor?: string
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  color?: string
  fontSize?: string
  TextButtom?: string
  marginRight?: string
}

export default function InputFileUpload(props: InputFileUploadProps) {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.showParagrafLeft && (
          <p style={{ marginLeft: '33px', marginTop: '5px', fontSize: '14px', marginRight: props.marginRight }}>
            {props.text}
            {props.showSpan && <span style={{ color: 'red' }}>*</span>}
          </p>
        )}
        <Button
          component='label'
          role={undefined}
          tabIndex={-1}
          //   variant='outlined'
          style={{
            width: props.width,
            textTransform: props.textTransform,
            backgroundColor: props.backgroundColor,
            color: props.color,
            height: props.height,
            fontSize: props.fontSize
          }}
        >
          Choose FiLe
          <VisuallyHiddenInput type='file' />
        </Button>
      </Stack>
      {props.showParagrafButtom && (
        <p style={{ marginLeft: '20vh', marginTop: '5px', fontSize: '14px' }}> {props.TextButtom}</p>
      )}
    </>
  )
}
