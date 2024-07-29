
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useContext, useState, createContext} from 'react'

const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value= {{isLoading,setIsLoading}}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext)