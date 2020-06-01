export type HourType = '6 AM'
 | '7 AM'
 | '8 AM'
 | '9 AM'
 | '10 AM'
 | '11 AM'
 | '12 PM'
 | '1 PM'
 | '2 PM'
 | '3 PM'
 | '4 PM'
 | '5 PM'
 | '6 PM'
 | '7 PM'
 | '8 PM'
 | '9 PM'
 | '10 PM'
 | '11 PM'
 | '12 AM'
 | '1 AM'
 | '2 AM'
 | '3 AM'
 | '4 AM'
 | '5 AM'


type VideoIdRecord = {
  '6 AM': string
  '7 AM': string
  '8 AM': string
  '9 AM': string
  '10 AM': string
  '11 AM': string
  '12 PM': string
  '1 PM': string
  '2 PM': string
  '3 PM': string
  '4 PM': string
  '5 PM': string
  '6 PM': string
  '7 PM': string
  '8 PM': string
  '9 PM': string
  '10 PM': string
  '11 PM': string
  '12 AM': string
  '1 AM': string
  '2 AM': string
  '3 AM': string
  '4 AM': string
  '5 AM': string
}

const acnhVideoIds: VideoIdRecord = {
  '6 AM': 'FqUlCT47ucE',
  '7 AM': 'y6dF4h5z0ik',
  '8 AM': 'YhpYzNZkg8E',
  '9 AM': 'rw-NhaaC8bU',
  '10 AM': 'mnC8Yj7GUBk',
  '11 AM': 'bnzSJMLDm90',
  '12 PM': 'FuMClV20DDg',
  '1 PM': 'cTMHpVXBWVo',
  '2 PM': 'ALRRqnJdAhc',
  '3 PM': 'Lu7h28H52jM',
  '4 PM': 'jHs6hIDmOFE',
  '5 PM': 'pJvjbosEdHE',
  '6 PM': 'lxgcDP-wppM',
  '7 PM': 'ZMgj30uGeb0',
  '8 PM': '9n-LArbDkIk',
  '9 PM': 'QEkytL-anQw',
  '10 PM': 'GFBWicff5ZE',
  '11 PM': 'HT-djWRbNN4',
  '12 AM': 'lqs34Ou0Rw8',
  '1 AM': 'LJhvOKQZqC0',
  '2 AM': 'bgdqH77h4qU',
  '3 AM': 'C1cfkkscrI8',
  '4 AM': 'GnLPAiLYmKw',
  '5 AM': 'dJwg-mWj7xY',
}

const acnlVideoIds: VideoIdRecord = {
  '6 AM': 'mWa-tiP3a_o',
  '7 AM': '-CtfRww-2YM',
  '8 AM': 'OHxpIqpAjz0',
  '9 AM': 'T9ieUkNOEf4',
  '10 AM': '25wXOGbmWOc',
  '11 AM': 'TPFZhtkP7M0',
  '12 PM': 'vZVS2FtVWHA',
  '1 PM': 'G3rtW1G2Ixg',
  '2 PM': 'LiXoQXCFhF8',
  '3 PM': 'CM58GBw4JkE',
  '4 PM': 'wqaKOCbeXmY',
  '5 PM': 'HXG9zU2Lb6g',
  '6 PM': 'iLSwc8wgJeo',
  '7 PM': 'rmtKHo7GB64',
  '8 PM': 'DhrsQO9Pkbs',
  '9 PM': 'Fl4M-a3eBnw',
  '10 PM': 'tEWFq1_NVSg',
  '11 PM': 'ytHqYVbuLt4',
  '12 AM': 'A_00O4KWBxY',
  '1 AM': 'uX2NxSN49Tg',
  '2 AM': 'LAioanQMG_A',
  '3 AM': '_pCBzrFnTlw',
  '4 AM': 'eSfQrWXD94A',
  '5 AM': 'zQLvrhUXwtE',
}

const accfVideoIds: VideoIdRecord = {
  '6 AM': 'z2QAAJeHF2s',
  '7 AM': 'cQ2UTZ-S9Q8',
  '8 AM': 'C7X6BLiB2Ec',
  '9 AM': '3UpdJMSAP10',
  '10 AM': 'CYk1CtYzz0o',
  '11 AM': 'FTpvuY4Y1AE',
  '12 PM': 'VhzGugcr_aQ',
  '1 PM': '2bwO3lZkTHs',
  '2 PM': 'FivBqy6VG4w',
  '3 PM': '1Oya4xMfRfw',
  '4 PM': 'K6KkeYwAFHE',
  '5 PM': 'syxR6VzzAqQ',
  '6 PM': 'yx_BIFCFpaA',
  '7 PM': 'eGl1CzBxtRQ',
  '8 PM': 'mFOLcD_w5sc',
  '9 PM': 'Riz2ON11Vso',
  '10 PM': 'lOdQfelEVaY',
  '11 PM': 'ouBKNNeGbh8',
  '12 AM': 'G3IzATmzA3o',
  '1 AM': 'IUtCHa6RgMQ',
  '2 AM': '9DwrEx-69PM',
  '3 AM': 'lSqkG3QEsRw',
  '4 AM': 'jSUBf13bKOU',
  '5 AM': 'VBOBHSdoHL8',
}

export enum VideoSet {
  NewHorizons = 'acnh',
  NewLeaf = 'acnl',
  CityFolk = 'accf',
}

export const videoIds: Record<VideoSet, VideoIdRecord> = {
  [VideoSet.NewHorizons]: acnhVideoIds,
  [VideoSet.NewLeaf]: acnlVideoIds,
  [VideoSet.CityFolk]: accfVideoIds,
}

export const hours = Object.keys(acnhVideoIds)

export const getCurrentHour = () => (new Date()).toLocaleString('en-US', { hour: 'numeric', hour12: true }) as HourType
