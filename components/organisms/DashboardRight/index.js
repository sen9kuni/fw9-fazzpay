import React from 'react'
import {Col} from 'react-bootstrap'
import Link from "next/link"
import Image from 'next/image'

export default function DashboardRight() {
  return (
    <Col md={7} className='d-none auth-background d-md-flex flex-md-column gap-md-5 p-5'>
      <div className="d-flex flex-column m-auto">
        <Link href='/'>
          <a className="text-decoration-none">
          <div className='d-flex justify-content-start'>
            <span className="fs-2 fw-bold colorWhite">FazzPay</span>
          </div>
          </a>
        </Link>
        <div>
          {/* <img className='responsiveImg' src={PhoneTwo} alt="auth-phone"/> */}
          <Image src='/images/phonetwo.svg' alt='auth-phone' width={512} height={575} />
        </div>

        <div className="d-flex flex-column gap-5">
          <span className="fs-3 fw-bold colorWhite">App that Covering Banking Needs.</span>
          <p className="fw-normal colorWhite">FazzPay is an application that focussing in banking needs for all users <br/> in the world. Always updated and always following world trends.<br/> 5000+ users registered in FazzPay everyday with worldwide<br/> users coverage.</p>
        </div>
      </div>
    </Col>
  )
}
