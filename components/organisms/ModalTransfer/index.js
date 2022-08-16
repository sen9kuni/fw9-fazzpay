import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import PinInput from './PinInput';
import { Formik } from 'formik'
import * as Yup from 'yup'
import PinInputOne from '../../molecules/inputPinOne'
import axios from '../../../helper/axios';
import { useDispatch, useSelector } from 'react-redux'
import cookies from 'next-cookies'

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
            <PinInputOne name='pin1' type='text' />
            <PinInputOne name='pin2' type='text' />
            <PinInputOne name='pin3' type='text' />
            <PinInputOne name='pin4' type='text' />
            <PinInputOne name='pin5' type='text' />
            <PinInputOne name='pin6' type='text' />
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
  const idUser = useSelector((state) => state?.TransferValues?.idUser)
  const dataNotes = useSelector((state) => state?.TransferValues?.notes)
  const dataAmount = useSelector((state) => state?.TransferValues?.amount)
  console.log(idUser);
  console.log(idUser);
  console.log(idUser);
  const onTransfer = async (value) => {
    try {
      const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
      const result = await axios.get(`/user/pin?pin=${fullPin}`)
      window.alert(result.data.msg)
      // if (result.data.msg == 'Correct pin') {
      //     console.log('aaaaaaaaa');
      //     const data = {receiverId: idUser, amount: dataAmount, notes: dataNotes}
      //     console.log(data);
      //     const result2 = await axios.post('/transaction/transfer', data)
      //     window.alert(result2.data.msg)
      // }
    } catch (e) {
      console.log(e.response);
      window.alert(e.response.data.msg)
    }
  }
  const onTransfer2 = async () => {
    try {
      console.log('aaaaaaaaa');
      const data = {receiverId: idUser, amount: dataAmount, notes: dataNotes}
      console.log(data);
      const result2 = await axios.post('/transaction/transfer', data)
      window.alert(result2.data.msg)
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
      <Modal.Header closeButton className='border-bottom-0'>
        <Modal.Title id="contained-modal-title-vcenter" className='fw-bold font-Size-18'>
                Enter PIN to Transfer
        </Modal.Title>
      </Modal.Header>
      <Formik initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} onSubmit={onTransfer, onTransfer2} >
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
