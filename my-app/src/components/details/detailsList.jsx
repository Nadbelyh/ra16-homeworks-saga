import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../utils/loader'
import Error from '../utils/error'

import { getServicesRequest } from '../../app/slices/detailsSlice'

export default function DetailsList() {
  const {
    items,
    allLoading: loading,
    error,
  } = useSelector((state) => state.services)
  const dispatch = useDispatch()

  const getServices = () => {
    dispatch(getServicesRequest())
  }

  return (
    <>
      {loading && !items.length ? (
        <Loader />
      ) : (
        <nav className='nav'>
          {items.map((i) => (
            <NavLink
              className='nav-link'
              to={`/${i.id}/details`}
              key={i.id}
            >
              {i.name}
            </NavLink>
          ))}
        </nav>
      )}
      {!items.length && error && <Error action={getServices} />}
    </>
  )
}