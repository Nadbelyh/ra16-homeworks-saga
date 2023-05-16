import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../utils/loader'
import Error from '../utils/error'

import { getDetailsRequest } from '../../app/slices/detailsSlice'

export default function Detail() {
  const {
    currentItem: detail,
    currentLoading: loading,
    error,
  } = useSelector((state) => state.services)
  const dispatch = useDispatch()
  const { id } = useParams()

  const getDetails = () => {
    dispatch(getDetailsRequest(id))
  }
  useEffect(() => {
    getDetails()
  }, [id])

  return (
    <>
      {error ? (
        <Error action={getDetails}></Error>
      ) : loading || !detail ? (
        <Loader />
      ) : (
        <div className='detail'>
          <div className='lable'>{detail.name}</div>
          <div className='lable'>{detail.content}</div>
          <div className='lable'>{detail.price}</div>
        </div>
      )}
    </>
  )
}