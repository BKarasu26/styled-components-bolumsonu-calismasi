import { createContext, useEffect, useState} from "react";

export const SiteContext = createContext()

export default function SiteContextProvider({children}){
    const [themeName,setThemeName] = useState(null)
   
   
    function handleClick(){
       
        setThemeName(prev => {
            const themeInfo = prev === "light" ? "dark" : "light";
            localStorage.setItem("thm",themeInfo);
          
            return themeInfo
        })
    }

    useEffect(() => {
        const temaAdi = localStorage.getItem("thm")
        setThemeName(temaAdi)
    },[])
    return <SiteContext.Provider value={{themeName,handleClick}}>
            {children}
    </SiteContext.Provider>
}