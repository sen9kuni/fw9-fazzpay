import React from 'react'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
export default function ButtonProfile({target, text, logo }) {
  return (
    <Link href={target}>
      <a className='d-grid text-decoration-none'>
        <Button className='d-flex flex-row background-e5 p-3 justify-content-between align-items-center border-unset'>
          <span className='fw-bold fontSize-16 color-4d'>{text}</span>
          {logo}
        </Button>
      </a>
    </Link>
  )
}
