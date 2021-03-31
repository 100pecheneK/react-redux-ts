import React from 'react'
import { useSelector } from 'react-redux'
import { appSelectors } from '../redux/app'
import { hideAlert } from '../redux/app/action-creators'
import { useTypedDispatch } from '../redux/store'
import Alert from './Alert'

export default function Alerts() {
  const dispatch = useTypedDispatch()
  const alerts = useSelector(appSelectors.alerts)
  return (
    <div style={{ position: 'absolute', top: '2em', right: '1em' }}>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          status={alert.status}
          message={alert.message}
          onClose={() => dispatch(hideAlert(alert.id))}
        />
      ))}
    </div>
  )
}
