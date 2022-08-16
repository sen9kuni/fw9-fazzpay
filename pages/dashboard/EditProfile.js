import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import Cookies from 'js-cookie'
import LoadingImage from '../../components/atoms/LoadingImage'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/action/profile'
import Image from 'next/image'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { Formik } from 'formik'
import { editProfileName, uploadImageProfile } from '../../redux/action/authUser'
import { useRouter } from 'next/router'


const EditForm = ({errors, handleSubmit, handleChange}) => {
  const profile = useSelector((state) => state.profile.data)
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lasttName, setLastName] = useState(profile.lastName)
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='gap-4 px-md-5 d-flex flex-column gap-md-5 w-75'>

      <Form.Group className="mb-3 input-group">
        <Form.Control name='firstName' className='inputLogin' value={firstName} onChange={(e)=> setFirstName(e.currentTarget.value)} type="text" />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <Form.Control name='lastName' className='inputLogin' value={lasttName} onChange={(e)=> setLastName(e.currentTarget.value)} type="text" />
        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="btn DashbuttonLogin fw-bold colorWhite">
        Confirmation
      </Button>
    </Form>
  )
}


export default function EditProfile() {
  const navigate = useRouter()
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [isLoading, setLoading] = useState(true)
  const [file, setFile] = useState()
  useEffect(()=> {
    getDatauser()
  }, [])
  const getDatauser =  async() => {
    try {
      await dispatch(getProfile(Cookies.get('id')))
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  }
  const editProfileBtn = (value) => {
    console.log(value);
    // console.log(file);
    if(file) {
      dispatch(uploadImageProfile(file))
    } 
    if (value.firstName === '' && value.lastName === '') {
      navigate.push('/profile')
    } else {
      dispatch(editProfileName(value))
      navigate.push('/profile')
    }
  }
  const handleChange = (event) => {
    setFile(event.target.files[0])
  }
  if (isLoading) return <LoadingImage/>
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Edit Personal Information</span>
        <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
      </div>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a text-center'>Current Image Profile</span>
        <div className='mx-auto'>
          <Image className='img-fluid rounded-2 overflow-hidden' height={200} width={200} src={profile.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${profile.image}` : '/images/sam.png'} alt='aaaaaa' />
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <Form onSubmit={editProfileBtn}>
          <Form.Group controlId="formFile" className="mb-3 w-75 mx-auto">
            <Form.Label>Upload your image profile</Form.Label>
            <Form.Control onChange={handleChange} type="file" name='image' />
          </Form.Group>
        </Form>
        <div className='d-flex justify-content-center'>
          <Formik initialValues={{firstName: '', lastName: ''}} onSubmit={editProfileBtn }>
              {(props)=><EditForm {...props}/>}
          </Formik>
        </div>
      </div>
    </MainComponent>
  )
}
