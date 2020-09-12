import { Tooltip } from '@material-ui/core'
import React, { useEffect, useMemo, useState } from 'react'
import { InputContainer } from './InputContainer'

const FileInput = ({label, register, name, watch, setValue, ...props}) => {
  const [internalLink, setInternalLink] = useState('')

  useEffect(() => {
    register({ name, type: 'custom' })
    if(typeof formValue === 'string') setInternalLink(formValue)
  }, [])

  const formValue = watch(name)


  return (
    <InputContainer {...props}>
      <div>
        <input onChange={(event) => setValue(name, event.target.files)} type='file' />
        {internalLink && (
          <Tooltip title={typeof formValue !== 'string' ? 'This file going to be overwritten' : ''}>
            <a target="_blank" download='image.png' href={internalLink}>Download file here</a>
          </Tooltip>
        )}
      </div>
    </InputContainer>
  )
}

export { FileInput }