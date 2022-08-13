import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Link from 'next/link'
import {FiCheck} from 'react-icons/fi'
import LogoDashboard from '../../components/organisms/LogoDashboard'
import DashboardRight from '../../components/organisms/DashboardRight'

export default function pinSuccess() {
  return (
    <>
    <LogoDashboard />
      <Row className='min-vh-100 mw-100'>
        <DashboardRight />
        <Col md={5} className='p-5 gap-4 px-md-5 p-5 d-flex flex-column gap-md-5'>
          <div className='dotCheckWrap'>
            <FiCheck size={50} className='colorWhite'/>
          </div>
          <h3 className="text-start fs-3 fw-bold colorSecondary">Your PIN Was Successfully Created</h3>
          <p className="text-start fw-normal text-muted">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>

          <Link href='/home'>
            <a className="text-decoration-none">
              <div className="d-grid">
                <button className="btn DashbuttonLogin fw-bold colorWhite text-decoration-none">Go To Dashboard</button>
              </div>
            </a>
          </Link>

        </Col>
      </Row>
    </>
  )
}
