import React from 'react'
import {Container, Col} from 'react-bootstrap'
import ComHeadaer from '../ComHeader'
import ComMenu from '../ComMenu'
import ComMenuMobile from '../ComMenuMobile'
import ComFooter from '../ComFooter'
import Head from 'next/head';

export default function MainComponent(props) {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : 'FazzPay'}</title>
      </Head>
      <div className='body-dashboard'>
        <ComHeadaer />
        <Container className='d-flex flex-column flex-md-row py-5 gap-3'>
          <ComMenuMobile />
          <ComMenu />
          <Col md={9} className='d-flex flex-column gap-4 rounded shadow-sm p-4 bg-white'>
            {props.children}
          </Col>
        </Container>
        <ComFooter />
      </div>
    </>
  )
}
