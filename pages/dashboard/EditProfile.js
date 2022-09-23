import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import Cookies from 'js-cookie'
import LoadingImage from '../../components/atoms/LoadingImage'
import { useDispatch, useSelector } from 'react-redux'
import { deleteImageProfile, editProfileName, getProfile, uploadImageProfile } from '../../redux/action/profile'
import Image from 'next/image'
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { FiTrash2 } from 'react-icons/fi'


const EditForm = ({errors, handleSubmit, handleChange}) => {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lasttName, setLastName] = useState(profile.lastName)
  React.useEffect(() => {
    dispatch(getProfile(Cookies.get('id')))
  },[dispatch])
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='gap-4 px-md-5 d-flex flex-column gap-md-5 w-75'>

      <Form.Group className="mb-3 input-group">
        <Form.Control name='firstName' placeholder='input your first name' className='inputLogin' value={firstName} onChange={(e)=> setFirstName(e.currentTarget.value)} type="text" />
        <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 input-group">
        <Form.Control name='lastName' placeholder='input your last name' className='inputLogin' value={lasttName} onChange={(e)=> setLastName(e.currentTarget.value)} type="text" />
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
  const errorMsg = useSelector((state) => state?.profile?.errorMsg)
  const successMsg = useSelector((state) => state?.profile?.successMsg)
  const [isLoading, setLoading] = useState(true)
  const [file, setFile] = useState()
  React.useEffect(() => {
    dispatch(getProfile(Cookies.get('id')))
    setLoading(false)
  },[])
  const editProfileBtn = async (value) => {
    // console.log(value);
    // console.log(file);
    if(file) {
      await dispatch(uploadImageProfile(file))
      navigate.push('/profile')
      dispatch(getProfile(Cookies.get('id')))
    } 
    if (value.firstName === '' && value.lastName === '') {
      navigate.push('/profile')
      dispatch(getProfile(Cookies.get('id')))
    } else {
      await dispatch(editProfileName(value))
      navigate.push('/profile')
      dispatch(getProfile(Cookies.get('id')))
    }
  }
  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const onDeleteimage = async () => {
    await dispatch(deleteImageProfile())
    dispatch(getProfile(Cookies.get('id')))
  }
  if (isLoading) return <LoadingImage/>
  return (
    <MainComponent>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a'>Edit Personal Information</span>
        <p className='text-start fontSize-16 color-7a'>We got your personal information from the sign<br/> up proccess. If you want to make changes on<br/> your information, contact our support.</p>
        {successMsg === 'Success delete image' && <Alert className='text-center' variant='success'>{successMsg}</Alert>}
        {/* {errorMsg === 'Wrong pin' && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>} */}
      </div>
      <div className='d-flex flex-column gap-3'>
        <span className='fw-bold fontSize-22 color-3a text-center'>Current Image Profile</span>
        <div className='mx-auto'>
          <Image className='img-fluid rounded-2 overflow-hidden' height={200} width={200} src={profile.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${profile.image}` : '/images/sam.png'} alt='aaaaaa' />
        </div>
      </div>
      <button onClick={() => onDeleteimage()} className="btn mx-auto d-flex flex-row gap-2 align-middle align-items-center btnEditProfile">
        <FiTrash2 />
          Delete
      </button>
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
