import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Row, Col, Button, Form, Alert} from 'react-bootstrap'
import {FiMail} from 'react-icons/fi'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import DashboardRight from '../../components/organisms/DashboardRight'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../redux/action/authUser'
import { useRouter } from 'next/router'

const resetPasswordSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
})

const ResetPaswordForm = ({errors, handleSubmit, handleChange})=> {
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiMail size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='email' className='inputLogin' onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      {/* <Link href='/new-password'> */}
      {/* <a className="d-grid text-decoration-none"> */}
      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
      Confirm
      </Button>
      {/* </a> */}
      {/* </Link> */}
    </Form>
  )
}

export default function InputEmailResetPassword() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const successMsg = useSelector((state) => state.authUser.successMsg)
  const errorMsg = useSelector((state) => state.authUser.errorMsg)

  const onInputEmail = async (value) => {
    await dispatch(forgotPassword(value))
  }

  React.useEffect(() => {
    if (successMsg === 'Process success, please check your email !') {
      navigate.push('/login')
    }
  }, [navigate, successMsg])
  return (
    <>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
          {successMsg && <Alert className='text-center' variant='success'>{successMsg}</Alert>}
          {errorMsg && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
          <Formik initialValues={{email: ''}} validationSchema={resetPasswordSechema} onSubmit={onInputEmail}>
            {(props)=><ResetPaswordForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
