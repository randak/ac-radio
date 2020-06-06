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
  appPaused: boolean
  playerPaused: boolean
  setPlayerPaused: React.Dispatch<React.SetStateAction<boolean>>
}

const Player = ({ videoId, appPaused, playerPaused, setPlayerPaused }: PlayerProps) => {
  const [video, setVideo] = useState<YouTubePlayer>()

  useEffect(() => {
    if (video) {
      if (appPaused) {
        video.pauseVideo()
      } else {
        video.playVideo()
      }
    }
  }, [appPaused, video])

  const _onReady = (event: PlayerEvent): void => {
    setVideo(() => event.target)
  }

  const _onEnd = (event: PlayerEvent): void => event.target.playVideo()

  const _onStateChange = (event: PlayerEvent): void => {
    if (event.data === YouTube.PlayerState.UNSTARTED) {
      if (appPaused && !playerPaused) {
        event.target.pauseVideo()
      } else if (!appPaused && playerPaused) {
        event.target.playVideo()
      }
    } else if (event.data === YouTube.PlayerState.PAUSED) {
      setPlayerPaused(() => true)
    } else if (event.data === YouTube.PlayerState.PLAYING) {
      setPlayerPaused(() => false)
    }
  }

  return (
    <div className={classes.player}>
      <YouTube
        videoId={videoId}
        onReady={_onReady}
        onEnd={_onEnd}
        onStateChange={_onStateChange}
      />
    </div>
  )
}

export default Player