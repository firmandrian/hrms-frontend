import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { SketchPicker, RGBColor, ColorResult } from 'react-color'

export default function ColorPicker() {
  const [colorPicker, setColorPicker] = useState(false)
  const [color, setColor] = useState<RGBColor>({
    r: 241,
    g: 112,
    b: 19,
    a: 1
  })

  function handleClick() {
    setColorPicker(!colorPicker)
  }

  function handleClose() {
    setColorPicker(false)
  }

  function handleChange(newColor: ColorResult) {
    setColor(newColor.rgb)
  }

  const styles = reactCSS({
    default: {
      color: {
        width: '100px',
        height: '15px',
        borderRadius: '2px',
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        position: 'absolute' as 'absolute',
        zIndex: '2' as '2'
      },
      cover: {
        position: 'fixed' as 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    }
  })
  return (
    <>
      <div>
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
        {colorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </div>
    </>
  )
}
