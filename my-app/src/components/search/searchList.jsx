import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchItems() {
  const { searchItems } = useSelector((state) => state.skills)

  if (!searchItems.length) return null
  return (
    <ul>
      {searchItems.map((i) => (
        <li
          className='search-item'
          key={i.id}
        >
          {i.name}
        </li>
      ))}
    </ul>
  )
}