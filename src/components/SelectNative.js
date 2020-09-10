import React from 'react'
import { InputContainer } from './InputContainer'
import { NativeSelect as MUISelectNative, FormControl, InputLabel } from '@material-ui/core';


const SelectNative = ({label, ...props}) => {
  return (
    <InputContainer>
      <FormControl style={{width: '300px'}}>
        <InputLabel>{label}</InputLabel>
        <MUISelectNative {...props} />
      </FormControl>
    </InputContainer>
  )
}

export { SelectNative }