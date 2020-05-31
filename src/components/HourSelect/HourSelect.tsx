import React from 'react'
import classes from './HourSelect.module.css'
import { hours } from '../../utils/hourly'

const HourSelect = ({ onChange, value, disabled }: { onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, value: string, disabled: boolean }) => (
  <select className={classes.select} value={value} onChange={onChange} disabled={disabled}>
    {hours.map(time => (
      <option value={time}>{time}</option>
    ))}
  </select>
)

export default HourSelect