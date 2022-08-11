import React from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import {Container, Col, Form, Button} from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import ListProfile from '../../components/molecules/ListProfile'
import { Formik } from 'formik'
import * as Yup from 'yup'

const loginSechema  = Yup.object().shape({
  amount: Yup.number().min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
})

const AuthForm = ({errors, handleSubmit, handleChange})=>{
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 text-center justify-content-center'>
      <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
      <Form.Group className="flex-nowrap amoutWarp text-center">
        <Form.Control name='amount' className='border-0 shadow-none' onChange={handleChange} type="number" placeholder="0.00" isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div>
        <span className="fw-bold fontSize-16">Rp120.000 Available</span>
      </div>

      <div className=' d-flex justify-content-center '>
        <Form.Group className="mb-3 input-group w-50">
          <span className="input-group-text iconLogin">
            <FiEdit2 size={24} className='colorA9Trans'/>
          </span>
          <Form.Control name='notes' onChange={handleChange} className='inputLogin' type="text" placeholder="Add some notes" />
        </Form.Group>
      </div>

      <div className="d-flex justify-content-end">
        <Button type="submit" className="btn btn-lg DashbuttonLogin fw-bold colorWhite">
        Continue
        </Button>
      </div>
    </Form>
  )
}

export default function InputAmount() {
  return (
    <MainComponent title='Transfer - Input Amount'>
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
      </div>
      <ListProfile alt='aaaaa' nameUser='Sam' phone='89458752147' />

      <Formik initialValues={{amount: '', notes: ''}} validationSchema={loginSechema}>
        {(props)=><AuthForm {...props}/>}
      </Formik>
    </MainComponent>
  )
}
