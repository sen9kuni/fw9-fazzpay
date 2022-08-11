import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListTopup({number, info}) {
  return (
    <Col>
      <div className="d-flex flex-row justify-content-between align-items-center background-dash-white shadow-sm rounded px-3 py-4">
        <div className="d-flex flex-row gap-3">
          <span className="colorPrimary fontSize-18 fw-bold">{number}</span>
          <span className="fw-normal fontSize-16 color-7a">{info}</span>
        </div>
      </div>
    </Col>
  )
}