import { Button, Form } from 'react-bootstrap'
import React, { useEffect } from 'react'
import MainComponent from '../../components/organisms/MainComponent'
import ListHistoryIncome from '../../components/molecules/ListHistoryIncome'
import ListHistoryExpense from '../../components/molecules/ListHistoryExpense'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router'
import cookies from 'next-cookies'
import axiosServer from '../../helper/axiosServer';
import { costomPagesMinus, costomPagesPlus, costomPagesReset } from '../../redux/reducers/CostomPage'
import { Formik } from 'formik';
import { FiFilter } from 'react-icons/fi'

const FilterForm = ({errors, handleSubmit, handleChange})=> {
  return (
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-row gap-2' >
      <Form.Select name='filter' onChange={handleChange} aria-label="Default select example">
        <option value="">-- Select Filter --</option>
        <option value="WEEK">WEEK</option>
        <option value="MONTH">MONTH</option>
        <option value="YEAR">YEAR</option>
      </Form.Select>
      <Button type='submit' className='background-dash-3a3 text-black border-0'>
        <FiFilter />
      </Button>
    </Form>
  )
}

export async function getServerSideProps(context) {
  try {
    const dataCookie = cookies(context)
    const page = !context.query?.page ? 1 : context.query.page;
    const filter = !context.query?.filter ? '' : context.query.filter;
    const users = await axiosServer.get(`/transaction/history?page=${page}&limit=6&filter=${filter}`, {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`
      }
    })
    return {
      props: {
        allData: users.data,
        dataHistory: users.data.data,
        filterVal: filter
      }
    }
  } catch (e) {
    console.log(e);
  }
}

export const numberFormat = (value) =>
  new Intl.NumberFormat('id-IN', {
    style: 'currency',
    currency: 'IDR'
  }).format(value);

export default function History(props) {
  // console.log(props.dataHistory);
  const dispatch = useDispatch()
  const numberPages = useSelector((state)=> state.CostomPage.page)

  useEffect(()=> {
    const filter = props.filterVal
    Router.push(`/history?page=${numberPages}&limit=5&filter=${filter}`)
  }, [numberPages])

  const nextPage = () => {
    dispatch(costomPagesPlus())
  }
  const prevPage = () => {
    dispatch(costomPagesMinus())
  }

  const onFilter = (value)=> {
    dispatch(costomPagesReset())
    const filter = value.filter
    // console.log(filter);
    if (filter) {
      const page = 1
      Router.push(`/history?page=${page}&limit=5&filter=${filter}`)
    } else {
      const page = 1
      Router.push(`/history?page=${page}&limit=5&filter=${filter}`)
    }
  }
  return (
    <MainComponent title='History'>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <span className='fw-bold font-Size-18 color-3a'>Transaction History</span>
        <div>
          <Formik initialValues={{filter: ''}} onSubmit={onFilter} >
            {(props)=><FilterForm {...props}/>}
          </Formik>
        </div>
      </div>
      {props?.dataHistory?.map((o) => {
        if (o.type == 'accept') {
          return (
            <ListHistoryIncome typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
          )
        } else if (o.type == 'topup') {
          return (
            <ListHistoryIncome typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
          )
        } else {
          return (
            <ListHistoryExpense typeTransfer={o.type} key={o.id} alt={o.firstName} nameUser={`${o.firstName} ${o.lastName}`} amount={numberFormat(o.amount)} image={o.image !== null ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o?.image}` : '/images/sam.png'} />
          )
        }
      })}
      <div className='d-flex flex-row justify-content-between'>
        <Button className='col-5 background-primary border-0 shadow-none' disabled={props.allData.pagination.page <= 1? true : false} onClick={prevPage} >Prev</Button>
        <Button className='col-5 background-primary border-0 shadow-none' disabled={props.allData.pagination.page == props.allData.pagination.totalPage? true : false} onClick={nextPage} >Next</Button>
      </div>
    </MainComponent>
  )
}
