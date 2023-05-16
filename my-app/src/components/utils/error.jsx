import React from 'react'

export default function Error({ action }) {
  const handleClick = () => {
    action()
  }
  return (
    <div className='error'>
      <div className='lable-error'>Произошла ошибка!</div>
      <button
        className='button'
        onClick={handleClick}
      >
        Повторить запрос
      </button>
    </div>
  )
}