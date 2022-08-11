import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import {Container, Col, Button, Form} from 'react-bootstrap'
import { FiPhone } from 'react-icons/fi'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone';

const addPhoneSchema  = Yup.object().shape({
  phone: Yup.string().phone('ID').required()
})

const AuthPhoneForm = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 w-50 mx-auto margin-bottom-pin'>
      <Form.Group className="flex-nowrap input-group">
        <span className="input-group-text iconLogin d-flex flex-row gap-3">
          <FiPhone size={24} className='colorA9Trans'/>
          <span className="font-med color-3a fontSize-16">+62</span>
        </span>
        <Form.Control name='phone' className='inputLogin shadow-none' onChange={handleChange} type="text" placeholder="Enter your phone number" isInvalid={!!errors.phone} />
      </Form.Group>
      <span>{errors.phone}</span>
      <Button type="submit" className='d-flex background-primary p-3 justify-content-center border-unset fw-bold fontSize-16 colorWhite'>
        Add Phone Number
      </Button>
    </Form>
  )
}

export default function EditPhonenumber() {
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
            <span className='fw-bold fontSize-22 color-3a'>Edit Phone Number</span>
            <p className='text-start fontSize-16 color-7a'>Add at least one phone number for the transfer<br/> ID so you can start transfering your money to<br/> another user.</p>
          </div>
        <Formik initialValues={{phone: ''}} validationSchema={addPhoneSchema}>
          {(props)=><AuthPhoneForm {...props}/>}
        </Formik>
    </MainComponent>
  )
}
