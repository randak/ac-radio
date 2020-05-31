import React, { useState, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import { PlayBar, ModePicker, Mode, Player } from '../../components'
import { videoIds, getCurrentHour } from '../../utils/hourly'
import classes from './Main.module.css'

const Main = () => {
  const [paused, setPaused] = useState<boolean>(true)
  const [hour, setHour] = useState<string>('6 AM')
  const [mode, setMode] = useState<Mode>(Mode.realtime)

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

  const onPlayClick = () => setPaused(prev => !prev)

  return (
    <DocumentTitle title={`${hour} - Animal Crossing Radio`}>
      <>
        <h1 className={classes.title}>
          Animal Crossing Radio
        </h1>
        <div className={classes.controls}>
          <ModePicker value={mode} onChange={event => setMode(event.target.value)} />
        </div>
        <main className={classes.main}>
          <PlayBar hour={hour} mode={mode} onPlayClick={onPlayClick} setHour={setHour} paused={paused} />
          <Player videoId={videoIds[hour]} paused={paused} />
        </main>
      </>
    </DocumentTitle>
  );
}

export default Main
