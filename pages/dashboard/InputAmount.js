import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainComponent from '../../components/organisms/MainComponent'
import {Container, Col, Form, Button} from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import ListProfile from '../../components/molecules/ListProfile'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Cookies from 'js-cookie'
import axios from '../../helper/axios'
import { setAmount, setIdUser, setNote } from '../../redux/reducers/TransferValues'
import { useRouter } from 'next/router'

const loginSechema  = Yup.object().shape({
  amount: Yup.number().min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
})

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

const AuthForm = ({errors, handleSubmit, handleChange})=>{
  const [btnSub, setBtnSub] = useState(false)
  const [data, setData] = useState({})
  useEffect(()=> {
    getDatauser()
  }, [])
  const getDatauser =  async() => {
    try {
      const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
      setData(result.data.data)
      // console.log(result.data.data);
    } catch (e) {
      console.log(e);
    }
  }
  // (event) => {
    // if (event.target.value > data?.balance ) {
    //   setBtnSub(true)
    // }
  // }
  console.log(btnSub);
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-5 text-center justify-content-center'>
      <p className='text-start color-7a'>Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
      <Form.Group className="flex-nowrap amoutWarp text-center" onChange={handleChange}>
        <Form.Control name='amount' className='border-0 shadow-none' onChange={(event)=> {
          if (event.target.value > data?.balance ) {
            setBtnSub(true)
          } else {
            setBtnSub(false)
          }
        }} type="number" placeholder="0.00" isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div>
        <span className="fw-bold fontSize-16">{numberFormat(parseInt(data?.balance))} Available</span>
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
        <Button disabled={btnSub} type="submit" className="btn btn-lg DashbuttonLogin fw-bold colorWhite">
        Continue
        </Button>
      </div>
    </Form>
  )
}

export default function InputAmount() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const user = useSelector((state) => state?.TransferValues?.userChoice)
  console.log(user);
  const parsingData = (value) => {
    dispatch(setAmount(value.amount))
    dispatch(setNote(value.notes))
    dispatch(setIdUser(user?.data?.id))
    navigate.push('/confirmation')
  }
  return (
    <MainComponent title='Transfer - Input Amount'>
      <div>
        <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
      </div>
      <ListProfile id={user?.data?.id} image={user?.data?.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${user?.data?.image}` : '/images/sam.png'} link={'#'} alt={user?.data?.firstName} nameUser={`${user?.data?.firstName} ${user?.data?.lastName}`} phone={user?.data?.noTelp} />

      <Formik initialValues={{amount: '', notes: ''}} validationSchema={loginSechema} onSubmit={parsingData}>
        {(props)=><AuthForm {...props}/>}
      </Formik>
    </MainComponent>
  )
}
