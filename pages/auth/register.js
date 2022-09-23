import React from 'react'
import DashboardRight from '../../components/organisms/DashboardRight'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import Head from 'next/head'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { register } from '../../redux/action/authUser'

const registerSechema  = Yup.object().shape({
  firstname: Yup.string().min(3).required(),
  lastname: Yup.string().min(3).required(),
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string().min(3).required()
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  // const navigate = useNavigate();
  // const successMsg = useSelector((state) => state.auth.successMsg)
  // const errorMsg = useSelector((state) => state.auth.errorMsg);

  // React.useEffect(() => {
  //   if (successMsg) {
  //     navigate('/pin', { state: { successMsg } });
  //   }
  // }, [navigate, successMsg]);
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiUser size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='firstname' className='inputLogin' onChange={handleChange} type="text" placeholder="Enter your firstname" isInvalid={!!errors.firstname} />
        <Form.Control.Feedback type='invalid'>{errors.firstname}</Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiUser size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='lastname' className='inputLogin' onChange={handleChange} type="text" placeholder="Enter your lastname" isInvalid={!!errors.lastname} />
        <Form.Control.Feedback type='invalid'>{errors.lastname}</Form.Control.Feedback>
      </Form.Group>

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

      {/* <Link href='/sign-up/create-pin'>
        <a className="d-grid text-decoration-none"> */}
      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
      Sign Up
      </Button>
      {/* </a>
      </Link> */}
    </Form>
  )
}

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const successMsg = useSelector((state) => state.authUser.successMsg)
  const errorMsg = useSelector((state) => state.authUser.errorMsg)
  const onRegister = async value => {
    // console.log(value);
    const data = {firstName: value.firstname, lastName: value.lastname, email: value.email, password: value.password}
    await dispatch(register(data))
  }

  React.useEffect(() => {
    if (successMsg === 'Success register user') {
      navigate.push('/login')
    }
  }, [navigate, successMsg])
  return (
    <>
      <Head>
        <title>FazzPay - sign up</title>
      </Head>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h3>
          <p className="text-start fw-normal text-muted">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</p>
          {successMsg && <Alert className='text-center' variant='success'>{successMsg}</Alert>}
          {errorMsg && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
          <Formik initialValues={{firstname: '',lastname: '',email: '', password: ''}} validationSchema={registerSechema} onSubmit={onRegister}>
            {(props)=><AuthForm {...props}/>}
          </Formik>

          <div className="text-center">
                Already have an account? Let&apos;s <Link href='/login'><a className="fw-bold colorPrimary text-decoration-none">Login</a></Link>
          </div>
        </Col>
      </Row>
    </>
  )
}
