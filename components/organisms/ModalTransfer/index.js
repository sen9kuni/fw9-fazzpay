import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import PinInput from './PinInput';
import { Formik } from 'formik'
import * as Yup from 'yup'
import PinInputOne from '../../molecules/inputPinOne'

const pinTransfer = Yup.object().shape({
  pin: Yup.array().of(
    Yup.string()
      .matches(/[0-9]{1}/, 'Must number value')
      .required('Needed Pin')
  )
})

const PinForm = ({errors, handleSubmit, handleChange}) => {
  return(
    <>
      <Modal.Body className='d-flex flex-column gap-5'>
        <p className='color-3a fw-normal font-Size-16'>
            Enter your 6 digits PIN for confirmation to<br/> continue transferring money. 
        </p>
        <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4'>
          <div className='d-flex flex-row justify-content-center gap-1 mw-100 h-auto'>
            <PinInputOne name={`pin[${0}]`} type='text' />
            <PinInputOne name={`pin[${1}]`} type='text' />
            <PinInputOne name={`pin[${2}]`} type='text' />
            <PinInputOne name={`pin[${3}]`} type='text' />
            <PinInputOne name={`pin[${4}]`} type='text' />
            <PinInputOne name={`pin[${5}]`} type='text' />
          </div>
          <span>{errors.pin}</span>
          <div className="d-flex justify-content-end">
            <Button type="submit" className='btn btn-lg fw-bold background-primary colorWhite'>
            Continue
            </Button>
          </div>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer className='border-top-0'>
      </Modal.Footer> */}
    </>
  )
}

function MyVerticallyCenteredModal(props) {
  // const navigate = useNavigate()
  // const dummyPin = 123456
  // const submitPin = (param)=>{
  //   const fullPin = param.pin.join('')
  //   if (parseInt(fullPin) === dummyPin) {
  //     console.log(fullPin);
  //     navigate('/transfersuccess')
  //   } else {
  //     navigate('/transferfailed')
  //   }
  // }
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-bottom-0'>
        <Modal.Title id="contained-modal-title-vcenter" className='fw-bold font-Size-18'>
                Enter PIN to Transfer
        </Modal.Title>
      </Modal.Header>
      <Formik initialValues={{pin: ['']}} validationSchema={pinTransfer} >
        {(props)=><PinForm {...props}/>}
      </Formik>
    </Modal>
  );
}

export default function ModalTransfer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button className="btn btn-lg fw-bold background-primary colorWhite border-0" onClick={() => setModalShow(true)}>
            Continue
      </Button>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
