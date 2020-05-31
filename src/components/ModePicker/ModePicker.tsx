import React from 'react'
import cx from 'classnames'
import classes from './ModePicker.module.css'

export enum Mode {
  realtime = 'realtime',
  choose = 'choose'
}

const ModePicker = ({ onChange, value }: { onChange: (event: any) => void, value: Mode }) => (
  <fieldset className={classes.modePicker}>
    <label className={cx(classes.mode, { [classes.selected]: Mode.realtime === value })}>
      <input className={classes.radio} type="radio" name="mode" value={Mode.realtime} onClick={onChange} checked={Mode.realtime === value} />
      {' '}
      Realtime
    </label>
    <label className={cx(classes.mode, { [classes.selected]: Mode.choose === value })}>
      <input className={classes.radio} type="radio" name="mode" value={Mode.choose} onClick={onChange} checked={Mode.choose === value} />
      {' '}
      Choose Track
    </label>
  </fieldset>
)

export default ModePicker