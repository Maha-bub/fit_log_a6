'use client'
import React, { useContext } from 'react';
import { MuscleContext } from '../context/MuclesContext';

const ListedDetailsPage = () => {
    const { todaysPlan, saveLetter } = useContext(MuscleContext);
    console.log(todaysPlan, saveLetter, "Today plan and Save plan rendered")
    return (
        <div>
           TOdays Plan: {todaysPlan.length}
        </div>
    );
};

export default ListedDetailsPage;