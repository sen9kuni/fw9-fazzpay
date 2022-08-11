import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListHistoryExpense({image, alt, nameUser, typeTransfer, amount}) {
  return (
    <Col className='d-flex flex-row justify-content-between p-3 align-items-center listHomeWarp'>
      <div className="d-flex flex-row gap-3">
        {/* <img className='img-fluid' src={image} alt={alt}/> */}
        <div className="d-flex flex-column">
          <span className="fw-bold color-4d">{nameUser}</span>
          <span className="color-thrid-sub">{typeTransfer}</span>
        </div>
      </div>
      <div>
        <span className="fw-bold colorOut">-{amount}</span>
      </div>
    </Col>
  )
}
