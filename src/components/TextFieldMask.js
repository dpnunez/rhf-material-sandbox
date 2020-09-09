import React from 'react'
import { IMaskMixin } from 'react-imask';
import { TextField } from './TextField'

const TextFieldMasked = IMaskMixin(({inputRef, ...props}) => (
	<TextField inputRef={inputRef} {...props} />
))

 
export { TextFieldMasked }