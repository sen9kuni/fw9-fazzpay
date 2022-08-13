import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import PinInputOne from '../../components/molecules/inputPinOne'
import DashboardRight from '../../components/organisms/DashboardRight'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'


const CreatePinForm = ({errors, handleSubmit, handleChange}) => {
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
        <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite mt-5'>
        Continue
        </Button>
      {/* </Link> */}
    </Form>
  )
}

export default function CreatePin() {
  const navigate = useRouter()
  const onSubmitPin = async (value) => {
    try {
      const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
      const data = {pin: fullPin}
      const result = await axios.patch(`/user/pin/${Cookies.get('id')}`, data)
      console.log(result);
      window.alert(result.data.msg)
      navigate.push('/auth/create-pin/success')
    } catch (e) {
      console.log(e.response);
      window.alert(e.response.data.msg)
    }
  }
  return (
    <>
    <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
          <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don&apos;t tell anyone about your FazzPay account password and the PIN.</p>

          {/* <PinInput />

          <Link to={'/pinsuccess'} className="text-decoration-none">
            <div className="d-grid">
              <button className="btn DashbuttonLogin fw-bold colorWhite">Confirm</button>
            </div>
          </Link> */}
          <Formik onSubmit={onSubmitPin} initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} >
            {(props)=><CreatePinForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
