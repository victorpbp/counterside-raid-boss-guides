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
        features1: "./assets/bosses/features/inhibitor.png",
        video1: "./assets/bosses/features/inhibitor.gif",
        features2: "./assets/bosses/features/inhibitor.png",
        video2: "./assets/bosses/features/inhibitor.gif",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Interdum velit euismod in pellentesque massa placerat duis. Sodales ut eu sem integer vitae justo eget magna fermentum. Metus dictum at tempor commodo ullamcorper a lacus.",
        general_advice1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        general_advice2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 1,
        name: "Britra",
        where_from: "Raid",
        avatar: "./assets/bosses/avatar/britra.png",
        unawakened: "./assets/bosses/unawakened/britra.png",
        awakened: "./assets/bosses/awakened/britra.png",
        features1: "./assets/bosses/features/britra.png",
        video1: "./assets/bosses/features/britra.gif",
        features2: "./assets/bosses/features/britra.png",
        video2: "./assets/bosses/features/britra.gif",       
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Interdum velit euismod in pellentesque massa placerat duis. Sodales ut eu sem integer vitae justo eget magna fermentum. Metus dictum at tempor commodo ullamcorper a lacus.",
        general_advice1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        general_advice2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
      },
      {
        id: 2,
        name: "Tyrant",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/tyrant.png",
        unawakened: "./assets/bosses/unawakened/tyrant.png",
        awakened: "./assets/bosses/awakened/tyrant.png", 
        features1: "./assets/bosses/features/tyrant.png",
        video1: "./assets/bosses/features/tyrant.gif",
        features2: "./assets/bosses/features/tyrant.png",
        video2: "./assets/bosses/features/tyrant.gif",         
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Interdum velit euismod in pellentesque massa placerat duis. Sodales ut eu sem integer vitae justo eget magna fermentum. Metus dictum at tempor commodo ullamcorper a lacus.",
        general_advice1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        general_advice2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 3,
        name: "Worm",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/worm.png",
        unawakened: "./assets/bosses/unawakened/worm.png",
        awakened: "./assets/bosses/awakened/worm.png",        
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Interdum velit euismod in pellentesque massa placerat duis. Sodales ut eu sem integer vitae justo eget magna fermentum. Metus dictum at tempor commodo ullamcorper a lacus.",
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
