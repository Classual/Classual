'use client'

import { useEffect, useState } from 'react';
// import fetchExampleCSV from '../lib/fetched_process';
import fetchCsv from '../lib/fetched_process';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from "./page.module.css";
import Image from 'next/image';
import logo from "../../../public/Logo.png";




function DetailedCourse() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const formattedData = await fetchCsv();
            setData(formattedData); // Set the parsed data
            console.log("data length:", formattedData.length);
        } catch (error) {
            console.error("Failed to fetch and parse CSV data:", error);
        }
    }

    return (
        <>
        <div className = {styles.logoContainer}>
            <div className={styles.logo}>
                <Image
                    src={logo} 
                    width={100} 
                    height={100} 
                    alt= "UCSD Classual Logo"
                />
            </div>
            <div className = {styles.Title}>
                UCSD Classual
            </div>
        </div>
        
        <div className = {styles.Quarter}>
            <label htmlFor="Quarter">Select Term: </label>
            <select name="Quarter" id="Quarter" className = "selectQuarter">
                <option values="option1">Spring 2024</option>
                <option values="option2">Winter 2024</option>
                <option values="option3">Fall 2023</option>
                <option values="option4">Spring 2023</option>
            </select>
        </div>

        <div>
            <h1 className = {styles.course_number}>DSC 140A</h1>
            <h2 className = {styles.course_name}>Data Science (DS25)</h2>
            <h3 className = {styles.description}>
                The course covers learning and using probabilistic models for knowledge representation and decision-making. Topics covered include graphical models, temporal models, and online learning, as well as applications to natural language processing, adversarial learning, computational biology, and robotics. Prior completion of MATH 181A is strongly recommended.</h3>
            <hr class="styled-hr" />
        </div>

        <div>
            <select id="classLevel" name="classLevel" className = "selectClass">
                <option values="option1">Freshman</option>
                <option values="option2">Sophomore</option>
                <option values="option3">Junior</option>
                <option values="option4">Senior</option>
            </select>
        </div>

        <div>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="enrolledNumber" stroke="#8884d8" />
                <Line type="monotone" dataKey="waitlistNumber" stroke="#82ca9d" />
                <Line type="monotone" dataKey="totalSeatNumber" stroke="#82ca9d" />
            </LineChart>
        </div>
    </>
    );
}

export default DetailedCourse;