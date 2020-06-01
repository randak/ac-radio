import React from 'react'
import { Picker, Option } from '../Picker'

export enum Mode {
  realtime = 'realtime',
  choose = 'choose'
}

interface ModePickerProps {
  value: Mode
  setValue: (mode: Mode) => void
}

const ModePicker = ({ value, setValue }: ModePickerProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value as Mode)

  return (
    <Picker>
      <Option onChange={onChange} value={Mode.realtime} label="Realtime" checked={Mode.realtime === value} />
      <Option onChange={onChange} value={Mode.choose} label="Choose Track" checked={Mode.choose === value} />
    </Picker>
  )
}

export default ModePicker