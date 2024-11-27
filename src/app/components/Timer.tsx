'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const utcHour = now.getUTCHours()
      const utcMinutes = now.getUTCMinutes()
      
      // Calculate minutes until next hour
      const minutesLeft = 60 - utcMinutes
      
      setTimeLeft(`${minutesLeft}`)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div 
      className="fixed top-4 right-4 z-10 bg-gray-800/30 backdrop-blur-sm p-2 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-sm gabarito-p text-gray-400">Next wisdom in</div>
      <div className="text-lg gabarito-timer text-gray-300">{timeLeft} minutes</div>
    </motion.div>
  )
}

