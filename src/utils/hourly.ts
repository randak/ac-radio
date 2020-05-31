export const videoIds: Record<string, string> = {
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

export const hours = Object.keys(videoIds)

export const getCurrentHour = () => (new Date()).toLocaleString('en-US', { hour: 'numeric', hour12: true })
