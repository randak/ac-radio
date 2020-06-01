import React from 'react'
import { Picker, Option } from '../Picker'
import { VideoSet } from '../../utils/hourly'

interface MusicPickerProps {
  value: VideoSet
  setValue: (value: VideoSet) => void
}

const MusicPicker = ({ value, setValue }: MusicPickerProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value as VideoSet)

  return (
    <Picker>
      <Option onChange={onChange} value={VideoSet.CityFolk} label="City Folk" checked={VideoSet.CityFolk === value} />
      <Option onChange={onChange} value={VideoSet.NewLeaf} label="New Leaf" checked={VideoSet.NewLeaf === value} />
      <Option onChange={onChange} value={VideoSet.NewHorizons} label="New Horizons" checked={VideoSet.NewHorizons === value} />
    </Picker>
  )
}

export default MusicPicker