import React from 'react'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { TextField } from '../components/TextField'
import { TextFieldMasked } from '../components/TextFieldMask'


const Home = () => {
	const { handleSubmit, register, getValues } = useForm()
	return (

		<FormContainer onSubmit={handleSubmit((values) => console.log(values))}>
			<FieldsContainer>
				<TextField label='Normal TextField' inputRef={register} inputProps={{name: 'normalTextField'}} />
				<TextFieldMasked label='Masked TextField' inputRef={register} inputProps={{name: 'maskedTextField'}} />
			</FieldsContainer>
			<Controls>
				<Button onClick={() => console.log(getValues())} color='primary' variant='outlined'>Show Values (LOG)</Button>
				<Button type='submit' color='primary' variant='contained'>Submit form</Button>
			</Controls>
		</FormContainer>
	)
}

export { Home }


const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	height: 100vh;
`
const FieldsContainer = styled.section`
	display: flex;
	flex-basis: 100%;
	overflow-y: auto;
	padding: 10px;
`

const Controls = styled.section`
	justify-content: space-between;
	display: flex;
	padding: 20px;
	box-shadow: -16px 14px 20px 0px black;
`