import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import {Row, Col, Form, Button} from 'react-bootstrap'
import PinInputOne from '../../components/molecules/inputPinOne'
import { Formik } from 'formik'
import Link from 'next/link'

const ChangePinForm = ({errors, handleSubmit, handleChange}) => {
  return(
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-3'>
      <div className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
        <PinInputOne name='pin1' type='text' />
        <PinInputOne name='pin2' type='text' />
        <PinInputOne name='pin3' type='text' />
        <PinInputOne name='pin4' type='text' />
        <PinInputOne name='pin5' type='text' />
        <PinInputOne name='pin6' type='text' />
      </div>
      <span>{errors.pin}</span>
      {/* <Link href='/sign-up/create-pin/success'> */}
        <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Change PIN
        </Button>
      {/* </Link> */}
    </Form>
  )
}

export default function ChangePinNew() {
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Change PIN</span>
        <p className='text-start fontSize-16 color-7a'>Enter your current 6 digits Zwallet PIN below to<br/> continue to the next steps.</p>
      </div>
      <div className='d-flex flex-column gap-5 mx-auto margin-bottom-pin'>
        <Formik initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} >
          {(props)=><ChangePinForm {...props}/>}
        </Formik>
      </div>
    </MainComponent>
  )
}
