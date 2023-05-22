import React, {useState, createContext, useEffect} from "react"
import {AsyncStorage} from "react-native"


export const RecordingContext = createContext()

export const RecordingContextProvider = ({children}) => {
    const [recordings, setRecordings] = useState([])

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
    <RecordingContext.Provider value = {{ recordings, add: add }}>
{children}
    </RecordingContext.Provider>
    )
}