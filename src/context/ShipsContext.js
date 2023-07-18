import React, { useContext, useState } from "react"

const ShipsContext = React.createContext()

export function useShips() {
  return useContext(ShipsContext)
}

export function ShipsProvider({ children }) {

  const [ships] = useState (

    [

      //Put all the ships here, each ship has its own object inside the array
      //Don't forget the commas and the right id.
      // Keep in mind, while in the same array, it's the same boss, when changing arrays, it's a different boss.

      [ //Britra
        {
          id: 0,
          name: "Kamiizumi",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Kamiizumi",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Kamiizumi",
          image: "",
          description: "",
          tier: "",
        },

      ],

    ]
  )


  return (
    <ShipsContext.Provider value = {ships} >
      {children}
    </ShipsContext.Provider>
  )

}
