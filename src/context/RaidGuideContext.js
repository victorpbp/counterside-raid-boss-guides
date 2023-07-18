import React, { useContext, useState } from "react"

const RaidGuideContext = React.createContext()

export function useContent() {
  return useContext(RaidGuideContext)
}


//TODO add the rest of the bosses and their info

//TODO make other contexts to separate what each component needs
//Ex: Make a context for DPS and only DPS has access to it, same for ships, ops, bosses...
//And then make 1 context that will define which ID everyone should be using
//This way every info will be synced but not everything needs to be inside the same huge context.
//This way we make the most out of the functionality and performance of the context hook.


export function RaidGuideProvider({ children }) {

  const [content] = useState (
    [
      //Each boss has its own stuff as well as characteristics for the rest of the components.
      //Don't forget the commas and the right id when adding new bosses or other things.
      {
        id: 0,
        boss: {
          name: "Britra",
          where_from: "",
          image: "",
          description: "",
          general_advice: "",
        },

        //Put all the ships here, each ship has its own object inside the array
        //Don't forget the commas and the right id.
        ships: [
          {
            id: 0,
            name: "",
            image: "",
            description: "",
            tier: "",
          },
        ],

        //Put all the ops here, each op has its own object inside the array
        //Don't forget the commas and the right id.
        ops: [
          {
            id: 0,
            name: "",
            image: "",
            description: "",
            tier: "",
          },
        ],

        //Put all the dps' here, each dps has its own object inside the array
        //Don't forget the commas and the right id.
        dps: [
          {
            id: 0,
            name: "",
            image: "",
            description: "",
            tier: "",
          },
        ],
      },
  
  ]
  )


  return (
    <RaidGuideContext.Provider value = {content} >
      {children}
    </RaidGuideContext.Provider>
  )

}
