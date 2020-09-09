import React from 'react'
import { TextField as MUITextField } from '@material-ui/core'
import { InputContainer } from './InputContainer'



const TextField = (props) => {
	return (
		<InputContainer>
			<MUITextField {...props}/>
		</InputContainer>
	)
}



export { TextField }