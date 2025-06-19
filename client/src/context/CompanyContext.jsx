import { useState,useContext, createContext } from "react";


export const CompanyContext=createContext()

export const useCompanyContext=()=>{
    return useContext(CompanyContext)
}

export const CompanyContextProvider=({children})=>{
    const [companies,setCompanies]=useState([])

    return <CompanyContext.Provider value={{companies,setCompanies}}>
        {children}
    </CompanyContext.Provider>
}