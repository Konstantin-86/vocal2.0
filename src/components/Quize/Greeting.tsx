"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/styles/Quize/Greeting.module.css';

export default function Greeting() {
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Проверяем localStorage при загрузке компонента
        const savedName = localStorage.getItem('vocalQuizName');
        if (savedName) {
            setName(savedName);
            setIsSubmitted(true);
            // Перенаправляем на начало квиза через небольшой таймаут
            const timer = setTimeout(() => {
                router.push('/quize');
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('vocalQuizName', name.trim());
            setIsSubmitted(true);
            // Перенаправляем на начало квиза
            setTimeout(() => {
                router.push('/quize');
            }, 1000);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.greetingContainer}>
                <h1>Привет, {name}!</h1>
                <p>Перенаправляем вас к опроснику...</p>
            </div>
        );
    }

    return (
        <div className={styles.greetingContainer}>
            <h1>Давай знакомиться!</h1>
            <form onSubmit={handleSubmit} className={styles.nameForm}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как тебя зовут?"
                    className={styles.nameInput}
                    required
                />
                <button type="submit" className={styles.submitButton}>
                    Продолжить
                </button>
            </form>
        </div>
    );
}