import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import PinInput from './PinInput';
import { Formik } from 'formik'
import * as Yup from 'yup'
import PinInputOne from '../../molecules/inputPinOne'
import axios from '../../../helper/axios';
import { useDispatch, useSelector } from 'react-redux'
import cookies from 'next-cookies'
import { cheackPin } from '../../../redux/action/profile';
import { transferBalance } from '../../../redux/action/TransferValues';
import { resetMsgProfile } from '../../../redux/reducers/profile';
import { useRouter } from 'next/router';

const pinTransfer = Yup.object().shape({
  pin: Yup.array().of(
    Yup.string()
      .matches(/[0-9]{1}/, 'Must number value')
      .required('Needed Pin')
  )
})

const PinForm = ({errors, handleSubmit, handleChange}) => {
  const errorMsg = useSelector((state) => state?.profile?.errorMsg)
  const successMsg = useSelector((state) => state?.profile?.successMsg)
  return(
    <>
      <Modal.Body className='d-flex flex-column gap-5'>
        <p className='color-3a fw-normal font-Size-16'>
            Enter your 6 digits PIN for confirmation to<br/> continue transferring money. 
        </p>
        {successMsg === 'Correct pin' && <Alert className='text-center' variant='success'>{successMsg}</Alert>}
        {errorMsg === 'Wrong pin' && <Alert className='text-center' variant='danger'>{errorMsg}</Alert>}
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
            <Button type="submit" className='btn btn-lg fw-bold background-primary colorWhite border-0'>
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
  const dispatch = useDispatch()
  const navigate = useRouter()
  const idUser = useSelector((state) => state?.TransferValues?.idUser)
  const dataNotes = useSelector((state) => state?.TransferValues?.notes)
  const dataAmount = useSelector((state) => state?.TransferValues?.amount)
  const errorMsg = useSelector((state) => state?.profile?.errorMsg)
  const successMsg = useSelector((state) => state?.profile?.successMsg)

  const onTransferFinal = (value) => {
    const fullPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6
    console.log(fullPin);
    dispatch(cheackPin(fullPin))
  }

  React.useEffect(() => {
    if (successMsg === 'Correct pin') {
      const data = {receiverId: idUser, amount: parseInt(dataAmount, 10), notes: dataNotes}
      dispatch(transferBalance(data))
      navigate.push('/transfer-success')
    } else if (errorMsg === 'Wrong pin') {
      navigate.push('/transfer-failed')
    }
  }, [successMsg, errorMsg, idUser, dataAmount, dataNotes, dispatch, navigate])
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
      <Formik initialValues={{pin1:'',pin2:'',pin3:'',pin4:'',pin5:'',pin6:'',}} onSubmit={onTransferFinal} >
        {(props)=><PinForm {...props}/>}
      </Formik>
    </Modal>
  );
}

export default function ModalTransfer() {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch()
  return (
    <>
      <Button className="btn btn-lg fw-bold background-primary colorWhite border-0" onClick={() => {setModalShow(true); dispatch(resetMsgProfile())}}>
            Continue
      </Button>
    
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
