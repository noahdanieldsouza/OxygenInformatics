import React, {useState, createContext, useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';


export const RecordingContext = createContext()

export const RecordingContextProvider = ({children}) => {
    const [recordings, setRecordings] = useState([])
   
    const clearRecents = () => {
      setRecordings([])
  }  
  const update = (recording, id) => {
    const updatedRecordings = [...recordings];
    updatedRecordings[id] = recording;
    setRecordings(updatedRecordings);
  };

    const add = (recording) => {
        setRecordings([...recordings, recording])
    }

    const saveRecents = async () => {
        try {  
          await AsyncStorage.setItem(
            'Recents',  
            JSON.stringify(recordings)
          );
        } catch (e) {
          console.log(e);
        }
    }

    const loadRecents = async () => {
            try {
              const history = await AsyncStorage.getItem('Recents');
      
              if (history && JSON.parse(history).length) {
                setRecordings(JSON.parse(history));
              }
            } catch (e) {
              console.log(e);
            }
          };
      
  
          
      useEffect(() => {
        loadRecents();
      }, []);
  
      useEffect(() => {
        saveRecents();
      }, [recordings]);

    return(
      <RecordingContext.Provider value={{ recordings, add, clear: clearRecents, update }}>
      {children}
    </RecordingContext.Provider>
    )
}