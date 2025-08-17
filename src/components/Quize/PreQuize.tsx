'use client'
import { useState } from 'react'
import styles from '@/styles/Quize/PreQuize.module.css'

type Answers = {
    level: string | null
    hasMicrophone: boolean | null
    quizType: 'serious' | 'fun' | null
}

const PreQuiz = () => {
    const [answers, setAnswers] = useState<Answers>({
        level: null,
        hasMicrophone: null,
        quizType: null
    })

    const [currentStep, setCurrentStep] = useState(0)

    const questions = [
        {
            text: "Как ты оцениваешь свой уровень вокала?",
            options: [
                "Новичок (только начинаю)",
                "Любитель (пою для себя)",
                "Продвинутый (занимаюсь регулярно)",
                "Профессионал (пою на сцене)"
            ],
            key: 'level'
        },
        {
            text: "У тебя есть микрофон для записи?",
            options: ["Да", "Нет"],
            key: 'hasMicrophone'
        },
        {
            text: "Какой опросник предпочитаешь?",
            options: ["Серьёзный", "Шуточный"],
            key: 'quizType'
        }
    ]

    const handleAnswer = (value: string | boolean) => {
        const key = questions[currentStep].key as keyof Answers
        setAnswers(prev => ({
            ...prev,
            [key]: key === 'hasMicrophone' ? value === 'Да' : value
        }))

        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1)
        } else {
            console.log(answers)
        }
    }

    return (
        <div className={styles.container}>
            <h2>Предварительный опрос</h2>

            <div className={styles.question}>
                <h3>{questions[currentStep].text}</h3>
                <div className={styles.options}>
                    {questions[currentStep].options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            className={styles.optionButton}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.progress}>
                {`Шаг ${currentStep + 1} из ${questions.length}`}
            </div>
        </div>
    )
}
export default PreQuiz