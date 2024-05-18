'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DetailedCourse from '../components/DetailedCourse';
import TestComponent from '../components/Test';

export default function CoursePage() {
    const { course } = useParams();
    const [currentCourse, setCurrentCourse] = useState(course);

    useEffect(() => {
        if (course) {
            setCurrentCourse(course);
        }
    }, [course]);

    if (!currentCourse) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <DetailedCourse course={currentCourse} />
            <TestComponent />
        </div>
    
        );
}