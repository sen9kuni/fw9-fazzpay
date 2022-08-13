import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {  FiLock } from 'react-icons/fi'
import {Container, Col, Button, Form, Alert } from 'react-bootstrap'
import { useRouter } from 'next/router'
import axios from '../../helper/axios'
import Cookies from 'js-cookie'

const createNewPassSechema  = Yup.object().shape({
  currentPassword: Yup.string().min(3).required('Current passwordis a required field'),
  newPassword: Yup.string().min(3).required('New password is a required field'),
  repeatNewPassword: Yup.string().min(3).required('Repeat new password is a required field')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
  // const errorMsg = useSelector((state) => state.auth.errorMsg);
  // const navigate = useNavigate();
  // const successMsg = useSelector((state) => state.auth.successMsg)
  // React.useEffect(() => {
  //   if (successMsg) {
  //     navigate('/profileuser', { state: { successMsg } });
  //   }
  // }, [navigate, successMsg]);
  return(
    <Form noValidate onSubmit={handleSubmit} className='gap-4 px-md-5 d-flex flex-column gap-md-5'>
      {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='currentPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Current password" isInvalid={!!errors.currentPassword} />
        <Form.Control.Feedback type='invalid'>{errors.currentPassword}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='newPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.newPassword} />
        <Form.Control.Feedback type='invalid'>{errors.newPassword}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <span className="input-group-text iconLogin">
          <FiLock size={24} className='colorA9Trans'/>
        </span>
        <Form.Control name='repeatNewPassword' className='inputLogin' onChange={handleChange} type="password" placeholder="Repeat your password" isInvalid={!!errors.repeatNewPassword} />
        <Form.Control.Feedback type='invalid'>{errors.repeatNewPassword}</Form.Control.Feedback>
      </Form.Group>


      {/* <Link to={'/home'} className="d-grid text-decoration-none"> */}
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Change Password
      </Button>
      {/* </Link> */}
    </Form>
  )
}

export default function ChangePassword() {
  const navigate = useRouter()
  const onChangePassword = async (value) => {
    try {
      const data = {oldPassword: value.currentPassword, newPassword: value.newPassword, confirmPassword: value.repeatNewPassword}
      const result = await axios.patch(`/user/password/${Cookies.get('id')}`, data)
      console.log(result);
      window.alert(result.data.msg)
      if (result.data.msg == 'Success update password') {
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
              <span className='fw-bold fontSize-22 color-3a'>Change Password</span>
              <p className='text-start fontSize-16 color-7a'>You must enter your current password and then<br /> type your new password twice.</p>
            </div>
            <div className='d-flex flex-column gap-5 w-50 mx-auto'>
              <Formik initialValues={{currentPassword: '', newPassword: '', repeatNewPassword: ''}} validationSchema={createNewPassSechema} onSubmit={onChangePassword}>
                {(props)=><AuthForm {...props}/>}
              </Formik>
            </div>
    </MainComponent>
  )
}
