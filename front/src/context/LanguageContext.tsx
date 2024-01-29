import{ useState, createContext, ReactNode } from "react";

type Language= "english" |"spanish";

interface LanguagContextValue {
  chosenLanguage: Language;
  togleLanguage:() => void | null;
    
  }
  
  interface LanguageContextProviderProps {
    children: ReactNode;
    
  }
  
  const languageContextDefaultValue: LanguagContextValue = {
    chosenLanguage: "english",
    togleLanguage:()=>null
    
  };
  
  export const LanguageContext = createContext(languageContextDefaultValue);
  
  
  
  const LanguageContextProvider = ({ children }: LanguageContextProviderProps) => {
    const [chosenLanguage, setChosenLanguage] = useState<Language>("english");
  
    const togleLanguage = () => {
      return chosenLanguage==="english" ? setChosenLanguage("spanish"):setChosenLanguage("english")
      
    };
  
    const value: LanguagContextValue = {
      chosenLanguage: chosenLanguage,
      togleLanguage: togleLanguage,
    };
  
    return (
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    );
  };
  
  export default LanguageContextProvider;
  