import React from 'react'
import classes from './PlayButton.module.css'

interface PlayButtonProps {
  onClick: () => void,
  paused: boolean
}

const PlayButton = ({ onClick, paused }: PlayButtonProps) => (
  <button onClick={onClick} className={classes.button} aria-label={paused ? 'Play' : 'Pause'}>
    {paused ? (
      <svg className={classes.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>
      ) : (
      <svg className={classes.icon} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
    )}
  </button>
)

export default PlayButton
