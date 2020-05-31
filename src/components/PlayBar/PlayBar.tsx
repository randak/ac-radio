import React from 'react'
import { HourSelect } from '../HourSelect'
import { PlayButton } from '../PlayButton'
import { Mode } from '../ModePicker'
import classes from './PlayBar.module.css'

interface PlayBarProps {
  hour: string
  mode: Mode
  onPlayClick: () => void
  setHour: (hour: string) => void
  paused: boolean
}

const PlayBar = ({ hour, mode, onPlayClick, setHour, paused }: PlayBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => setHour(event.target.value)

  return (
    <div className={classes.playbar}>
      <p>
        Now Playing:
        {' '}
        <HourSelect value={hour} onChange={handleChange} disabled={mode === Mode.realtime} />
      </p>
      <PlayButton onClick={onPlayClick} paused={paused} />
    </div>
  )
}

export default PlayBar
