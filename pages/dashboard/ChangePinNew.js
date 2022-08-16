import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import {Row, Col, Form, Button} from 'react-bootstrap'
import PinInputOne from '../../components/molecules/inputPinOne'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'

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
  const navigate = useRouter()
  const onNewPin = async (value) => {
    try {
      const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
      const data = {pin: fullPin}
      const result = await axios.patch(`/user/pin/${Cookies.get('id')}`, data)
      window.alert(result.data.msg)
      console.log(result);
      if (result.data.msg == 'Success update pin user') {
        navigate.push('/profile')
      }
    } catch (e) {
      console.log(e.response);
      window.alert(e.response.data.msg)
    }
  }
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Change PIN</span>
        <p className='text-start fontSize-16 color-7a'>Enter your current 6 digits Zwallet PIN below to<br/> continue to the next steps.</p>
      </div>
      <div className='d-flex flex-column gap-5 mx-auto margin-bottom-pin'>
        <Formik initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} onSubmit={onNewPin} >
          {(props)=><ChangePinForm {...props}/>}
        </Formik>
      </div>
    </MainComponent>
  )
}
