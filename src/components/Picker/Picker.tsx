import React from 'react'
import classes from './Picker.module.css'

const Picker: React.FC<{}> = ({ children }) => (
  <fieldset className={classes.picker}>
    {children}
  </fieldset>
)

export default Picker