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
        name: "Inhibitor",
        where_from: "Raid",
        avatar: "./assets/bosses/avatar/inhibitor.png",
        unawakened: "./assets/bosses/unawakened/inhibitor.png",
        awakened: "./assets/bosses/awakened/inhibitor.png",
        description: "",
        general_advice: "Extra info",
      },
      {
        id: 1,
        name: "Britra",
        where_from: "Raid",
        avatar: "./assets/bosses/avatar/britra.png",
        unawakened: "./assets/bosses/unawakened/britra.png",
        awakened: "./assets/bosses/awakened/britra.png",       
        description: "",
        general_advice: "Extra info",
      },
      {
        id: 2,
        name: "Tyrant",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/tyrant.png",
        unawakened: "./assets/bosses/unawakened/tyrant.png",
        awakened: "./assets/bosses/awakened/tyrant.png",         
        description: "",
        general_advice: "Extra info",
      },
      {
        id: 3,
        name: "Worm",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/worm.png",
        unawakened: "./assets/bosses/unawakened/worm.png",
        awakened: "./assets/bosses/awakened/worm.png",        
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
