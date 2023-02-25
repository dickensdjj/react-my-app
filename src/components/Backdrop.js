import React from 'react'

export const Backdrop = (props) => {
  const { clickFn } = props;
  return (
    <div onClick={clickFn} className='backdrop' />
  )
}
