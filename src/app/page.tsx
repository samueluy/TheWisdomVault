'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Timer from './components/Timer'
import MovingStars from './components/MovingStars'

export default function Home() {
  const [showTitle, setShowTitle] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const dailyWisdom = "The only true wisdom is in knowing you know nothing. - Socrates"

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-4 text-gray-300 bg-gray-900">
      <MovingStars />
      <Timer />
      <div className="text-center mb-8 z-10">
        <AnimatePresence mode="wait">
          {showTitle ? (
            <motion.h1
              key="title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
              className="text-4xl font-bold mb-4 gabarito-title"
            >
              TheWisdomVault
            </motion.h1>
          ) : (
            <motion.p
              key="wisdom"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-2xl max-w-md mx-auto gabarito-wisdom"
            >
              {dailyWisdom}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        onClick={() => setShowModal(true)}
        className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out gabarito-button z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Share Your Wisdom
      </motion.button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg max-w-md w-full shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-200 gabarito-modal-title">Share Your Wisdom</h2>
            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-700/30 text-gray-200 border border-gray-600/30 rounded gabarito-input placeholder-gray-500"
              placeholder="Your name (optional)"
            />
            <textarea
              className="w-full h-32 p-2 bg-gray-700/30 text-gray-200 border border-gray-600/30 rounded mb-4 gabarito-textarea placeholder-gray-500"
              placeholder="Enter your wisdom here..."
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-700/30 hover:bg-gray-600/30 text-gray-300 font-bold py-2 px-4 rounded mr-2 gabarito-button"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-600/50 hover:bg-blue-700/50 text-white font-bold py-2 px-4 rounded gabarito-button"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

