import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'
import classes from './Player.module.css'

type PlayerEvent = {
  target: YouTubePlayer
  data: number
}

interface PlayerProps {
  videoId: string
  paused: boolean
}

const Player = ({ videoId, paused }: PlayerProps) => {
  const [video, setVideo] = useState<YouTubePlayer>()

  useEffect(() => {
    if (video) {
      if (paused) {
        video.pauseVideo()
      } else {
        video.playVideo()
      }
    }
  }, [paused, video])

  const _onReady = (event: PlayerEvent): void => {
    event.target.playVideo()
    console.log("ready")
    setVideo(() => event.target)
  }

  const _onEnd = (event: PlayerEvent): void => event.target.playVideo()

  const _onStateChange = (event: PlayerEvent): void => {
    if (event.data === YouTube.PlayerState.PAUSED && !paused) {
      event.target.playVideo()
    }
  }

  return (
    <div className={classes.player}>
      <YouTube videoId={videoId} onReady={_onReady} onEnd={_onEnd} onStateChange={_onStateChange} />
    </div>
  )
}

export default Player