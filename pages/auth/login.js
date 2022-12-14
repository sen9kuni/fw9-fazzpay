import React from 'react'
import DashboardRight from '../../components/organisms/DashboardRight'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import Head from 'next/head'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import {FiMail, FiLock} from 'react-icons/fi'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/action/authUser'
import { resetMsgAuth } from '../../redux/reducers/authUser'

const loginSechema  = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(3).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  const dispatch = useDispatch()
  // const successMsg = useSelector((state) => state.auth.successMsg)
  // const errorMsg = useSelector((state) => state.auth.errorMsg)
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      {/* {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiMail size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='email' className='inputLogin' onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='password' className='inputLogin' onChange={handleChange} type="password" placeholder="Enter your password" isInvalid={!!errors.password} />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <div className="text-end">
        <Link href='/reset-password'>
          <a onClick={() => dispatch(resetMsgAuth())} className="link-secondary text-decoration-none fontMid">
            <span>Forgot password?</span>
          </a>
        </Link>
      </div>

      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite shadow-none">
      Login
      </Button>

      <div className="text-center">
        Don&apos;t have an account? Let&apos;s <Link href='/sign-up'><a onClick={() => dispatch(resetMsgAuth())} className="fw-bold colorPrimary text-decoration-none"><p>Sign Up</p></a></Link>
      </div>
    </Form>
  )
}

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const successMsg = useSelector((state) => state.authUser.successMsg)
  const errorMsg = useSelector((state) => state.authUser.errorMsg)
  // React.useEffect(()=> {
  //   if (Cookies.get('token') !== null) {
  //     navigate.push('/home')
  //   }
  // },[])
  React.useEffect(()=> {
    if (Cookies.get('token') !== null && successMsg === 'Success login') {
      navigate.push('/home')
    }
  },[navigate, successMsg])

  const handleLogin = async (value) => {
    await dispatch(login(value))
    console.log(successMsg);
  }
  return (
    <>
      <Head>
        <title>FazzPay - login</title>
      </Head>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>
          {successMsg && <Alert className='text-center' variant='success'>{successMsg}</Alert>}
          {errorMsg && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
          <Formik initialValues={{email: '', password: ''}} validationSchema={loginSechema} onSubmit={handleLogin}>
            {(props)=><AuthForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
