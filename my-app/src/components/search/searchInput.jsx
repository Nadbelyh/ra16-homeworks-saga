import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchField } from '../../app/slices/searchSlice'

export default function SearchInput() {
  const { search } = useSelector((state) => state.skills)
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    dispatch(changeSearchField(evt.target.value))
  }

  return (
    <>
      <input
        type='text'
        value={search}
        onChange={handleChange}
      />
      {search.trim() === '' && (
        <div className='lable'>
          Type something to search...
        </div>
      )}
    </>
  )
}