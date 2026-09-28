'use client'

import { ReactNode, useState } from "react";
import { createContext } from "vm";

const MuscleContext = createContext({})
const MuclesContextProvider = ({ children }: { children: ReactNode }) => {

    const { todaysPlan, setTodaysPlan } = useState([])
    const { saveLetter, setSaveLetter } = useState([])

    const stateAssets={
        todaysPlan,
        setTodaysPlan,
        saveLetter,
        setSaveLetter
    }

    return (
        <MuscleContext.Provider value={stateAssets}>
            {children}
        </MuscleContext.Provider>

    );
};

export default MuclesContextProvider;