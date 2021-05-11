import { createContext, useContext, useState } from 'react';


const SelectedProjectContext = createContext();
const SelectedProjectProvider = ({children}) => {
    const  [ selectedProject, setSelectedProject ] = useState('INBOX');
     
    return(
        <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

const useSelectedProjectValue = () => useContext(SelectedProjectContext);


export {SelectedProjectContext, SelectedProjectProvider, useSelectedProjectValue};

