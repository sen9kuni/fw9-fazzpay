import React from 'react'
import {Form} from 'react-bootstrap'

export default function PinInputOne({name, type}) {
  return (
    <div className='d-flex align-items-center max-min-pin-wrap rounded p-2'>
      <Form.Control name={name} type={type} className='w-100 h-auto border-0 input-pin-com text-center' />
    </div>
  )
}
