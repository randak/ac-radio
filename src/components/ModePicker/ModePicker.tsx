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
  const onClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
    setValue((event.target as HTMLInputElement).value as Mode)

  return (
    <Picker>
      <Option onClick={onClick} value={Mode.realtime} label="Realtime" checked={Mode.realtime === value} />
      <Option onClick={onClick} value={Mode.choose} label="Choose Track" checked={Mode.choose === value} />
    </Picker>
  )
}

export default ModePicker