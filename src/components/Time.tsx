import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dayjs } from 'lib/dayjs'

const now = () => dayjs().tz('Europe/Berlin')

const events = {
  christmas: [24, 12],
  newYear: [1, 1],
  birthday: [3, 3],
}

const format = 'hhA'
const beforeTime = dayjs('12AM', format).tz() 
const afterTime = dayjs('8AM', format).tz()

const Time = () => {
  const [date, setDate] = useState(now())

  const currentEvent = Object.entries(events)
    .filter((entry) => entry[1][0] === date.date() && entry[1][1] === date.month() + 1)
    .flat()[0] as string

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p>
      <FontAwesomeIcon
        className="mr-2"
        icon={date.isBetween(beforeTime, afterTime) ? ['far', 'snooze'] : ['far', 'clock']}
      />
      {date.format('MMMM Do YYYY • h:mm:ss A')}{' '}
      {currentEvent && (
        <span className="font-bold">
          —{' '}
          {
            {
              christmas: 'Merry Christmas!',
              newYear: 'Happy New Year!',
              birthday: 'Happy Birthday to me!',
            }[currentEvent]
          }
        </span>
      )}
    </p>
  )
}

export default Time
