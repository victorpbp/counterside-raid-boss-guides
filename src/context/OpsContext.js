import React, { useContext, useState } from "react"

const OpsContext = React.createContext()

export function useOps() {
  return useContext(OpsContext)
}

export function OpsProvider({ children }) {

  const [ops] = useState (

    [

      //Put all the ops here, each op has its own object inside the array
      //Don't forget the commas and the right id.
      // Keep in mind, while in the same array, it's the same boss, when changing arrays, it's a different boss.

      [ //Britra
        {
          id: 0,
          name: "Kim Hana",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Kim Hana",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Kim Hana",
          image: "",
          description: "",
          tier: "",
        },

      ],

    ]

  )


  return (
    <OpsContext.Provider value = {ops} >
      {children}
    </OpsContext.Provider>
  )

}
