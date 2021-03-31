import React from 'react'
import { AlertType } from '../redux/app/@types'

type AlertProps = Omit<AlertType, 'id'> & { onClose: () => {} }

export default function Alert({ status, message, onClose }: AlertProps) {
  return (
    <div className={`alert alert-${status}`} role='alert'>
      {message}
      <button
        type='button'
        className='close ml-3'
        aria-label='Close'
        onClick={onClose}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  )
}
