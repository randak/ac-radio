import React from 'react'
import cx from 'classnames'
import classes from './Picker.module.css'

interface OptionProps {
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  checked: boolean
  value: string
  label: string
}

const Option = ({ onClick, checked, value, label }: OptionProps) => (
  <label className={cx(classes.option, { [classes.selected]: checked })}>
    <input className={classes.radio} type="radio" name="mode" value={value} onClick={onClick} checked={checked} />
    {` ${label}`}
  </label>
)

export default Option