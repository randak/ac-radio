import React, { ChangeEvent } from 'react'
import cx from 'classnames'
import classes from './Picker.module.css'

interface OptionProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  value: string
  label: string
}

const Option = ({ onChange, checked, value, label }: OptionProps) => (
  <label className={cx(classes.option, { [classes.selected]: checked })}>
    <input className={classes.radio} type="radio" name="mode" value={value} onChange={onChange} checked={checked} />
    {` ${label}`}
  </label>
)

export default Option