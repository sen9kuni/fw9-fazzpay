import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import {FiLock} from 'react-icons/fi'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import DashboardRight from '../../components/organisms/DashboardRight'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { resetPassword } from '../../redux/action/authUser'

const inputNewPassSechema  = Yup.object().shape({
  password: Yup.string().min(3).required(),
  Repeatpassword: Yup.string().min(3).required()
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


      <Button type="submit" className="btn DashbuttonLogin fw-bold colorWhite shadow-none">
      Reset Password
      </Button>
    </Form>
  )
}

export async function getServerSideProps(context) {
  console.log(context.query)
  return {
    props: {
      keysChangePassword: context.query
    }
  }
}

export default function ResetPassword(props) {
  // console.log(props.keysChangePassword.keysChangePassword);
  const dispatch = useDispatch()
  const navigate = useRouter()
  const successMsg = useSelector((state) => state.authUser.successMsg)
  const errorMsg = useSelector((state) => state.authUser.errorMsg)
  const [errorText, setErrorText] = React.useState(false)

  const onResetPass = async (value) => {
    // setErrorText(false)
    if (value.password === value.Repeatpassword) {
      const param = {keysChangePassword: props.keysChangePassword.keysChangePassword, newPassword: value.password, confirmPassword: value.Repeatpassword}
      // console.log(param);
      dispatch(resetPassword(param))
    } else {
      // setErrorText(true)
      window.alert('New password and Repeat Password not same')
    }
  }

  React.useEffect(() => {
    if (successMsg === 'Success change password') {
      navigate.push('/login')
    }
  }, [navigate, successMsg])
  return (
    <>
      <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />

        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <h3 className="text-start fs-3 fw-bold colorTextPrimary">Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.</h3>
          <p className="text-start fw-normal text-muted">Now you can create a new password for your FazzPay account. Type your password twice so we can confirm your new passsword.</p>
          {errorMsg && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
          {/* {errorText && <Alert className='text-center' variant='danger'>New password and Repeat Password not same</Alert>} */}
          <Formik initialValues={{password: '', Repeatpassword: '' }} validationSchema={inputNewPassSechema} onSubmit={onResetPass}>
            {(props)=><AuthForm {...props}/>}
          </Formik>
        </Col>
      </Row>
    </>
  )
}
