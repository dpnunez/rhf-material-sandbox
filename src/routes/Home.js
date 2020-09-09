import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { TextField } from '../components/TextField'
import { TextFieldMasked } from '../components/TextFieldMask'

let renderCount = 1
const Home = () => {
	const { handleSubmit, register, getValues } = useForm()

	renderCount++
	return (

		<FormContainer onSubmit={handleSubmit((values) => console.log(values))}>
			<FieldsContainer>
				<TextField label='Normal TextField' inputRef={register} inputProps={{name: 'normalTextField'}} />
				<TextFieldMasked mask={'00/00/0000'} label='Masked' inputRef={register} inputProps={{name: 'maskTextField'}} />
				<TextFieldMasked mask={[{mask: '(00) 0000-0000'}, {mask: '(00) 00000-0000'}]} label='Multiple Mask' inputRef={register} inputProps={{name: 'multipleMask'}} />
			</FieldsContainer>
			<Controls>
				<Button onClick={() => console.log(getValues())} color='primary' variant='outlined'>Show Values (LOG)</Button>
				<Button type='submit' color='primary' variant='contained'>Submit form</Button>
			</Controls>
			<RenderCount>
				Re-renders: {renderCount}
			</RenderCount>
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

const RenderCount = styled.div`	
	position: absolute;
	top: 2%;
	right: 2%;
	color: white;
	opacity: 0.5;
	padding: 5px 15px;
	border-radius: 10px;
	background-color: ${({theme}) => theme.palette.secondary.main};
	transition: all 0.2s ease;

	&:hover {
		opacity: 0.8;
	}
`