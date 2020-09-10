import React from 'react'
import { Select as MUISelect, FormControl, InputLabel } from '@material-ui/core'
import { Controller } from 'react-hook-form'

const Select = ({label, ...props}) => {
  return (
    <FormControl style={{width: '300px'}}>
      <InputLabel>{label}</InputLabel>
      <Controller 
        as={MUISelect}
        {...props}
      />
    </FormControl>
  )
}

export { Select }