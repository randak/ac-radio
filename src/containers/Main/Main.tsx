import React, { useState, useEffect } from 'react'
import  createPersistedState from 'use-persisted-state'
import DocumentTitle from 'react-document-title'
import { PlayBar, ModePicker, Mode, Player, MusicPicker } from '../../components'
import { videoIds, getCurrentHour, VideoSet, HourType } from '../../utils/hourly'
import classes from './Main.module.css'

const useHourState = createPersistedState('hour')
const useModeState = createPersistedState('mode')
const useVideoSetState = createPersistedState('videoSet')

const Main = () => {
  // Represents the app's paused state
  const [appPaused, setAppPaused] = useState<boolean>(true)
  // Represents the Youtube player's paused state, which can be triggered outside of the app (e.g. Apple touch bar)
  const [playerPaused, setPlayerPaused] = useState<boolean>(true)
  const [hour, setHour] = useHourState<HourType>('6 AM')
  const [mode, setMode] = useModeState<Mode>(Mode.realtime)
  const [videoSet, setVideoSet] = useVideoSetState<VideoSet>(VideoSet.NewHorizons)

  useEffect(() => {
    const setRealtimeHour = () => {
      if (mode === Mode.realtime) {
        setHour(getCurrentHour())
      }
    }

    setRealtimeHour()

    const intervalId = setInterval(setRealtimeHour, 1000); // Recheck every second

    return () => clearInterval(intervalId);
  }, [setHour, mode]);

  const onPlayClick = () => setAppPaused(prev => !prev)

  return (
    <DocumentTitle title={`${hour} - Animal Crossing Radio`}>
      <>
        <h1 className={classes.title}>
          Animal Crossing Radio
        </h1>
        <div className={classes.controls}>
          <MusicPicker value={videoSet} setValue={setVideoSet} />
          <ModePicker value={mode} setValue={setMode} />
        </div>
        <main className={classes.main}>
          <PlayBar hour={hour} mode={mode} onPlayClick={onPlayClick} setHour={setHour} paused={playerPaused} />
          <Player
            videoId={videoIds[videoSet][hour]}
            appPaused={appPaused}
            playerPaused={playerPaused}
            setPlayerPaused={setPlayerPaused}
          />
        </main>
      </>
    </DocumentTitle>
  );
}

export default Main
