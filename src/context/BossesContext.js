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
        name: "Inhibitor",
        where_from: "Raid",
        avatar: "./assets/bosses/avatar/inhibitor.png",
        unawakened: "./assets/bosses/unawakened/inhibitor.png",
        awakened: "./assets/bosses/awakened/inhibitor.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        extra_info: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
        ],
      },
      {
        name: "Britra",
        where_from: "Raid",
        avatar: "./assets/bosses/avatar/britra.png",
        unawakened: "./assets/bosses/unawakened/britra.png",
        awakened: "./assets/bosses/awakened/britra.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        extra_info: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
        ],
      },
      {
        name: "Tyrant",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/tyrant.png",
        unawakened: "./assets/bosses/unawakened/tyrant.png",
        awakened: "./assets/bosses/awakened/tyrant.png", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        extra_info: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
        ],
      },
      {
        name: "Worm",
        where_from: "Guild Boss",
        avatar: "./assets/bosses/avatar/worm.png",
        unawakened: "./assets/bosses/unawakened/worm.png",
        awakened: "./assets/bosses/awakened/worm.png",  
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",      
        extra_info: [
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            static: "./assets/bosses/features/inhibitor.png",
            video: "./assets/bosses/features/inhibitor.gif",
          },
        ],
      },
      
    ],
  )


  return (
    <BossesContext.Provider value = {bosses} >
      {children}
    </BossesContext.Provider>
  )

}
