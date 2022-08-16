import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {FiLock} from 'react-icons/fi'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import DashboardRight from '../../components/organisms/DashboardRight'
import Link from 'next/link'

const inputNewPassSechema  = Yup.object().shape({
  password: Yup.string().min(8).required(),
  Repeatpassword: Yup.string().min(8).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Enter your new password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='Repeatpassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.Repeatpassword} />
        <Form.Control.Feedback type='invalid'>{errors.Repeatpassword}</Form.Control.Feedback>
      </Form.Group>


      <Link href='/login'>
        <a className="d-grid text-decoration-none">
          <Button type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
          Reset Password
          </Button>
        </a>
      </Link>
    </Form>
  )
}

export default function resetPassword() {
  return (
    <>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">Now you can create a new password for your FazzPay account. Type your password twice so we can confirm your new passsword.</p>


          <Formik initialValues={{password: '', Repeatpassword: '' }} validationSchema={inputNewPassSechema}>
            {(props)=><AuthForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
