import React from 'react'
import {FiGrid, FiPlus, FiArrowUp, FiUser, FiLogOut} from 'react-icons/fi'
import {Row, Col, Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import ModalTopup from '../ModalTopup'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { logOut } from '../../../redux/action/authUser'

export default function ComMenu() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const onLogout = () => {
    dispatch(logOut())
    navigate.push('/login')
  }
  return (
    <Col md={3} className="d-none d-md-flex flex-md-column col-md-3">
      <div className="d-flex flex-column gap-4 gap-md-5 h-100 p-4 shadow-sm rounded background-dash-white">
        <div className="navButton">
          <Link href='/home'>
            <a className="d-flex flex-row gap-3 align-items-center text-decoration-none">
              <FiGrid size={28} />
              <span className="fw-bold">Dashboard</span>
            </a>
          </Link>
        </div>
        <div className="navButton">
          <Link href='/search-recevier'>
            <a className="d-flex flex-row gap-3 align-items-center text-decoration-none">
              <FiArrowUp size={28} />
              <span className="fw-bold">Transfer</span>
            </a>
          </Link>
        </div>
        {/* <div className="navButton">
          <Link href='/top-up'>
            <a className="d-flex flex-row gap-3 align-items-center text-decoration-none">
              <FiPlus size={28} />
              <span className="fw-bold">Top Up</span>
            </a>
          </Link>
        </div> */}
        <ModalTopup />
        <div className="navButton">
          <Link href='/profile'>
            <a className="d-flex flex-row gap-3 align-items-center text-decoration-none">
              <FiUser size={28} />
              <span className="fw-bold">Profile</span>
            </a>
          </Link>
        </div>
        <div className="navButton mt-auto">
          {/* <Button className='bg-transparent'> */}
          <a onClick={onLogout} className="d-flex flex-row gap-3 align-items-center text-decoration-none">
            <FiLogOut size={28} />
            <span className="fw-bold">Logout</span>
          </a>
          {/* </Button> */}
        </div>
      </div>
    </Col>
  )
}
