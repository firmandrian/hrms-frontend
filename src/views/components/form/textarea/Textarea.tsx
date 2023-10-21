import React from 'react'

//import MUI components
import { styled } from '@mui/system'
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/base/TextareaAutosize'

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

export default function Textarea(props: TextareaProps) {
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: Lato,"Helvetica Neue",Arial,sans-serif;
    font-size: 14px;
    line-height: 1.5;
    padding: 12px;
  `
  )
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.showParagrafLeft && (
          <p style={{ marginLeft: '30px', marginTop: '5px', fontSize: '14px', marginRight: '46px' }}>{props.text}</p>
        )}
        <StyledTextarea
          maxRows={4}
          aria-label='maximum height'
          value={props.value}
          onChange={props.onChange}
          autoFocus={true}
          // onFocus={e => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
          style={{
            marginLeft: props.marginLeft,
            width: props.width,
            marginTop: props.marginTop,
            height: props.height,
            marginRight: props.marginRight,
            marginBottom: props.marginButtom
          }}
        />
      </Stack>
    </>
  )
}
