import React, { useContext, useState } from "react"

const BossesContext = React.createContext()

export function useBosses() {
  return useContext(BossesContext)
}

export function BossesProvider({ children }) {

  const [bosses] = useState (
    //Each boss has its own stuff as well as characteristics for the rest of the components.
    //Don't forget the commas and the right id when adding new bosses or other things.
    [
      {
        id: 0,
        name: "Britra",
        where_from: "Raid",
        image: "",
        description: "",
        general_advice: "Extra info",
      },
      {
        id: 1,
        name: "Inhibtor",
        where_from: "Raid",
        image: "",
        description: "",
        general_advice: "Extra info",
      },
      {
        id: 2,
        name: "Worm",
        where_from: "Guild Boss",
        image: "",
        description: "",
        general_advice: "Extra info",
      },
    ],
  )


  return (
    <BossesContext.Provider value = {bosses} >
      {children}
    </BossesContext.Provider>
  )

}
