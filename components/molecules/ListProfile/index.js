import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

export default function ListProfile({image, alt, nameUser, phone}) {
  return (
    <Link href='#'>
      <a className="text-decoration-none">
        <Col>
          <div className="d-flex flex-row justify-content-between align-items-center rounded searchListWrap background-dash-white shadow-sm p-3">
            <div className="d-flex flex-row gap-3">
              {/* <img className='img-fluid' src={image} alt={alt} height="70px" width="70px"/> */}
              <div className='image-frame-profile-transfer rounded-2 overflow-hidden'>
                <Image src={image} alt={alt} className='img-fluid' height={70} width={70} />
              </div>
              <div className="d-flex flex-column gap-2">
                <span className="fw-bold fontSize-18 color-4d">{nameUser}</span>
                <span className="color-7a fontSize-16">+62 {phone}</span>
              </div>
            </div>
          </div>
        </Col>
      </a>
    </Link>
  )
}
