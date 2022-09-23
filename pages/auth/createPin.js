import React from 'react'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import PinInputOne from '../../components/molecules/inputPinOne'
import DashboardRight from '../../components/organisms/DashboardRight'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { updatePin } from '../../redux/action/profile'


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
  const dispatch = useDispatch()
  const successMsg = useSelector((state) => state.profile.successMsg)
  const errorMsg = useSelector((state) => state.profile.errorMsg)
  const onSubmitPin = async (value) => {
    const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
    const data = {pin: fullPin}
    await dispatch(updatePin(data))
  }
  React.useEffect(() => {
    if (successMsg === 'Success update pin user') {
      navigate.push('/auth/create-pin/success')
    }
  }, [navigate, successMsg])
  return (
    <>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h3>
          <p className="text-start fw-normal text-muted">Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don&apos;t tell anyone about your FazzPay account password and the PIN.</p>
          {errorMsg && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
          <Formik onSubmit={onSubmitPin} initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} >
            {(props)=><CreatePinForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
