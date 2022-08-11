import React from 'react'
import { Col } from 'react-bootstrap'

export default function ListInfo({titleInfo, info, linkTo}) {
  return (
    <Col>
      <div className="d-flex flex-row justify-content-between align-items-center background-dash-white shadow-sm rounded p-3">
        <div className="d-flex flex-column gap-2">
          <span className="color-7a fontSize-16">{titleInfo}</span>
          <span className="fw-bold fontSize-18 color-51">{info}</span>
        </div>
        {linkTo}
      </div>
    </Col>
  )
}
