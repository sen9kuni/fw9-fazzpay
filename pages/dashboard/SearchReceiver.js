import React, { useEffect, useState } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import { FiSearch } from 'react-icons/fi'
import ListProfile from '../../components/molecules/ListProfile'
import axios from '../../helper/axios';
import axiosServer from '../../helper/axiosServer';
import cookies from 'next-cookies';
import Router, { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { costomPagesMinus, costomPagesPlus, costomPagesReset } from '../../redux/reducers/CostomPage';
import Cookies from 'js-cookie';
import { Formik } from 'formik';

const SearchForm = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <div className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
        <Button type='submit' className="input-group-text iconSearch">
          <FiSearch className='color-a9' size={24} />
        </Button>
        <Form.Control onChange={handleChange} type="text" name='search' className="form-control inputSearch" placeholder="Search receiver here"/>
      </div>
    </Form>
  )
}

export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context)
    const page = !context.query?.page? 1 : context.query.page;
    const search = !context.query?.search? '' : context.query.search;
    const users = await axiosServer.get(`/user?page=${page}&limit=5&search=${search}&sort=firstName ASC`, {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`
      }
    })
    return {
      props: {
        allData: users.data,
        dataUsers: users.data.data
      }
    }
  } catch (e) {
    console.log(e);
  }
}


export default function SearchReceiver(props) {
  const dispatch = useDispatch()
  const numberPages = useSelector((state)=> state.CostomPage.page)
  useEffect(()=> {
    const search = ''
    Router.push(`/search-recevier?page=${numberPages}&limit=5&search=${search}&sort=firstName ASC`)
  },[numberPages])

  const nextPage = () => {
    dispatch(costomPagesPlus())
  }
  const prevPage = () => {
    dispatch(costomPagesMinus())
  }

  const onSearch = (value)=> {
    dispatch(costomPagesReset())
    const search = value.search
    if (search) {
      const page = 1
      Router.push(`/search-recevier?page=${page}&limit=5&search=${search}&sort=firstName ASC`)
    } else {
      const page = 1
      Router.push(`/search-recevier?page=${page}&limit=5&search=${search}&sort=firstName ASC`)
    }
  }
  return (
    <MainComponent title='Transfer - Search Receiver'>
      <div>
              <span className="fw-bold fontSize fontSize-18 color-3a">Search Receiver</span>
            </div>

            {/* <div className="input-group flex-nowrap rounded background-dash-3a3 p-3 search-reciver-input">
              <span className="input-group-text iconSearch">
                <FiSearch className='color-a9' size={24} />
              </span>
              <input type="text" className="form-control inputSearch" placeholder="Search receiver here"/>
            </div> */}
            <Formik initialValues={{search: ''}} onSubmit={onSearch}>
              {(props)=><SearchForm {...props}/>}
            </Formik>
            <div className="d-flex flex-column gap-3">
              {props?.dataUsers?.map((o) => {
                if (o.id !== Cookies.get('id')) {
                  return (
                    <ListProfile link={'/input-amount'} id={o.id} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} phone={o.noTelp} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
                  )
                } else {
                  null
                }
              })}
            </div>
            <div className='d-flex flex-row justify-content-between'>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={props.allData.pagination.page <= 1? true : false} onClick={prevPage} >Prev</Button>
              <Button className='col-5 background-primary border-0 shadow-none' disabled={props.allData.pagination.page == props.allData.pagination.totalPage? true : false} onClick={nextPage} >Next</Button>
            </div>
    </MainComponent>
  )
}
