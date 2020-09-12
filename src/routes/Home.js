import React, { useState, useCallback } from 'react'
import { Button, MenuItem } from '@material-ui/core'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import styled from 'styled-components'

import { TextField } from '../components/TextField'
import { TextFieldMasked } from '../components/TextFieldMask'
import { SelectNative } from '../components/SelectNative'
import { Select } from '../components/Select'
import { getFormData } from '../services'
import { FileInput } from '../components/FileInput'

let renderCount = 1



const Home = () => {
	const [isLoading, setIsLoading] = useState(false)

	const formMethods = useForm()
	const { register, control, reset, handleSubmit, setValue, watch, getValues } = formMethods

	const getAsyncData = useCallback(async({loader}) => {
		try {
			if (loader) {
				setIsLoading(true)
			}
			const data = await getFormData(true, 1999)
			reset(data)
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}, [reset])

	renderCount++

	return (
		<FormProvider {...formMethods}>
			<FormContainer onSubmit={handleSubmit((values) => console.log(values))}>
				<FieldsContainer>
					{isLoading ? <h1>loading</h1> : (
						<>
							<GroupInput>
								<h1>TextFields</h1>
								<Flex>
									<TextField label='Normal (no Controller)' inputRef={register} inputProps={{name: 'normalTextField'}} />
									<Controller control={control} name='normalTextFieldController' as={TextField} label='Normal (Controller)' />
									<TextFieldMasked mask={'00/00/0000'} label='Masked' inputRef={register} inputProps={{name: 'maskTextField'}} />
									<Controller control={control} as={TextFieldMasked}  mask={'00/00/0000'} label='Masked (Controller)' inputRef={register} name='maskTextFieldWithController' />
									<TextFieldMasked mask={[{mask: '(00) 0000-0000'}, {mask: '(00) 00000-0000'}]} label='Multiple Mask' inputRef={register} inputProps={{name: 'multipleMask'}} />
									<Controller control={control} as={TextFieldMasked} mask={[{mask: '(00) 0000-0000'}, {mask: '(00) 00000-0000'}]} label='Multiple masked (Controller)' inputRef={register} name='multipleMaskWithController' />
								</Flex>
								<Note>
									<span>Note:</span> Is recomended to use Custom TextFields only with Controller component. Aparently, in "normal" cases, there is not problems use just providing an inputRef directly by the component, but on maskedComponents (with this implementantion) the reset will not working correctly.
								</Note>
							</GroupInput>
							<GroupInput>
								<h1>Selects</h1>
								<Flex>
									<SelectNative inputRef={register} label='Native select' inputProps={{name: 'nativeSelect'}} >
										<option aria-label="None" value="" />
										<option value={10}>Ten</option>
										<option value={20}>Twenty</option>
										<option value={30}>Thirty</option>
									</SelectNative>
									<Select label='teste' control={control} name='materialSelect'>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</Flex>
								<Note>
									<span>Note:</span> (Material spec) Native selects only supports values as string, so if you want to use object or others kinds of data consider use the MUI select.
								</Note>
							</GroupInput>
							<GroupInput>
								<h1>Input type file</h1>
								<Flex>
									<FileInput name='typeFile' register={register} setValue={setValue} watch={watch} />
								</Flex>
							</GroupInput>
						</>
					)}
				</FieldsContainer>
				<Controls>
					<Button onClick={() => console.log(getValues())} color='primary' variant='outlined'>Show Values (LOG)</Button>
					<Button onClick={() => getAsyncData({loader: false})} color='primary' variant='outlined'>Simulate Request</Button>
					<Button onClick={() => getAsyncData({loader: true})} color='primary' variant='outlined'>Simulate Request (With loader)</Button>
					<Button type='submit' color='primary' variant='contained'>Submit form</Button>
				</Controls>
				<RenderCount>
					Re-renders: {renderCount}
				</RenderCount>
			</FormContainer>
		</FormProvider> 
	)
}

export { Home }


const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	height: 100vh;
`
const FieldsContainer = styled.section`
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

const GroupInput = styled.div`
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	padding: 40px  10px;
`

const Flex = styled.div`
	display: flex;
`

const Note = styled.p`
	span {
		font-size: 22px;
	}

	&, * {
		color: ${({theme}) => theme.palette.primary.main};
	}
`