import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import Link from "next/link"

export default function ComMenuMobile() {
  return (
    <Nav className='d-md-none background-primary w-100 rounded'>
      <Row className='d-flex w-100 h-auto p-3 mx-auto justify-content-around gap-2 align-items-center'>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link href='#'>
            <a className="text-decoration-none">
              <FiGrid size={20} className='colorPrimary' />
            </a>
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link href='#'>
            <a className="text-decoration-none">
              <FiArrowUp size={20} className='colorPrimary' />
            </a>
          </Link>
        </Col>
        <Col className='rounded-circle text-center circle-menu-big d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link href='#'>
            <a className="text-decoration-none">
              <FiPlus size={20} className='colorPrimary' />
            </a>
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link href='#'>
            <a className="text-decoration-none">
              <FiUser size={20} className='colorPrimary' />
            </a>
          </Link>
        </Col>
        <Col className='rounded-pill text-center circle-menu d-flex align-items-center justify-content-center shadow-sm background-dash-white'>
          <Link href='#'>
            <a className="text-decoration-none">
              <FiLogOut size={20} className='colorPrimary' />
            </a>
          </Link>
        </Col>
      </Row>
    </Nav>
  )
}
