import React from 'react'
import classes from './HourSelect.module.css'
import { hours, HourType } from '../../utils/hourly'

interface HourSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value: HourType
  disabled: boolean
}

const HourSelect = ({ onChange, value, disabled }: HourSelectProps) => (
  <select className={classes.select} value={value} onChange={onChange} disabled={disabled}>
    {hours.map(time => (
      <option value={time}>{time}</option>
    ))}
  </select>
)

export default HourSelect