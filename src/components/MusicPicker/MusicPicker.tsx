import React from 'react'
import { Picker, Option } from '../Picker'
import { VideoSet } from '../../utils/hourly'

interface MusicPickerProps {
  value: VideoSet
  setValue: (value: VideoSet) => void
}

const MusicPicker = ({ value, setValue }: MusicPickerProps) => {
  const onClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
    setValue((event.target as HTMLInputElement).value as VideoSet)

  return (
    <Picker>
      <Option onClick={onClick} value={VideoSet.NewLeaf} label="New Leaf" checked={VideoSet.NewLeaf === value} />
      <Option onClick={onClick} value={VideoSet.NewHorizons} label="New Horizons" checked={VideoSet.NewHorizons === value} />
    </Picker>
  )
}

export default MusicPicker