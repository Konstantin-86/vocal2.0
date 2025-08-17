'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/Quize/Quize.module.css'
import StartQuize from '@/components/Quize/StartQuize'

export default function QuizPage() {
  const [name, setName] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    const savedName = typeof window !== 'undefined'
      ? localStorage.getItem('vocalQuizName')
      : null

    if (savedName) {
      setName(savedName)
      showGreetingWithTimer()
    }
  }, [])

  const showGreetingWithTimer = () => {
    setShowGreeting(true)
    const timer = setTimeout(() => {
      setShowGreeting(false)
      setShowQuiz(true)
    }, 1500)
    return () => clearTimeout(timer)
  }

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('vocalQuizName', name.trim())
      showGreetingWithTimer()
    }
  }

  if (showGreeting) {
    return (
      <div className={styles.fullscreenGreeting}>
        <h1>Привет, {name}!</h1>
      </div>
    )
  }

  // Основной контент
  return (
    <div className={styles.container}>
      {!showQuiz ? (
        // Форма ввода имени
        <div className={styles.nameForm}>
          <h2>Давайте познакомимся</h2>
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
            <button type="submit">Начать опрос</button>
          </form>
        </div>
      ) : (
        <div className={styles.quiz}>
          <h2>Опросник по вокалу</h2>
          <p>Добро пожаловать, {name}!</p>
          <StartQuize />
        </div>
      )}
    </div>
  )
}