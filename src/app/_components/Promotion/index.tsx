'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

function Promotion() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7天后的日期

    const intervalId = setInterval(() => {
      const now = new Date()
      const distance = targetDate.getTime() - now.getTime()

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId) // 清除定时器
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.titleBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>
      </div>
      <ul className={classes.stats}>
        <StatBox label="Days" value={time.days}/>
        <StatBox label="Hours" value={time.hours}/>
        <StatBox label="Minutes" value={time.minutes}/>
        <StatBox label="Sections" value={time.seconds}/>
      </ul>
    </section>
  )
}

const StatBox = ({label, value} : {label: string, value: number}) => {
  return (
    <li className={classes.statBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )
}

export default Promotion
