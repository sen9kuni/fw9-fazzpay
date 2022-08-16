import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {FiPlus} from 'react-icons/fi'
import {Col} from 'react-bootstrap'
import Link from 'next/link'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import axios from '../../../helper/axios'

const topupSechema  = Yup.object().shape({
  amount: Yup.number().min(10000, 'minimal 10.000').max(5000000, 'max 5.000.000').required('must fill amount'),
  // notes: Yup.string()
  // pin: Yup.array().of(Yup.string().matches(/[0-9]{1}/, 'cuk')).required()
})

const TopUpForm = ({ errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-md-5'>
      <Form.Group className="mb-3 input-group">
        <Form.Control name='amount' className='inputLogin' onChange={handleChange} type='number' placeholder='input amount here' isInvalid={!!errors.amount} />
        <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <div className='d-flex justify-content-end'>
        <Button className="btn btn-lg fw-bold background-primary colorWhite border-0" type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  )
}

function ModalMenuTopUp(props) {
  const navigate = useRouter()
  const hendleTopup = async (value) => {
    console.log(value);
    try {
      const result = await axios.post('/transaction/top-up', value)
      console.log(result);
      if (result.data.msg == 'Please pay topup') {
        // navigate.push(result.data.data.redirectUrl)
        window.open(result.data.data.redirectUrl)
        // props.onHide
      }
    } catch (e) {
      console.log(e.response);
      window.alert(e.response.data.msg)
    }
  }
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Topup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
        Enter the amount of money, and click<br/> submit
        </p>
        <Formik initialValues={{amount: ''}} validationSchema={topupSechema} onSubmit={hendleTopup}>
          {(props)=><TopUpForm {...props}/>}
        </Formik>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function ModalTopup() {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <div className="navButton">
        <a className="d-flex flex-row gap-3 align-items-center text-decoration-none"  onClick={() => setModalShow(true)}>
          <FiPlus size={28} />
          <span className="fw-bold">Top Up</span>
        </a>
      </div>
      <ModalMenuTopUp show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}
