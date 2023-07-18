import React, { useContext, useState } from "react"

const RaidGuideContext = React.createContext()

export function useGlobalSelector() {
  return useContext(RaidGuideContext)
}

// TODO Populate the contexts with proper info

export function RaidGuideProvider({ children }) {

  const [globalSelector, setGlobalSelector] = useState(0)

  return (
    <RaidGuideContext.Provider value = {[globalSelector, setGlobalSelector]} >
      {children}
    </RaidGuideContext.Provider>
  )

}
