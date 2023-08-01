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
          image: "./assets/operators/kim_hana.png",
          description: "Gives skill haste boost and extra dp on top of having an extremely easy trigger.",
          tier: "S",
        },        {
          id: 1,
          name: "Lena Mackenzie",
          image: "./assets/operators/lena.png",
          description: "Buffs ASPD for all allies and is relatively easy to trigger.",
          tier: "A",
        },        {
          id: 2,
          name: "Mark Finley",
          image: "./assets/operators/mark.png",
          description: "If you're new to operators, he's given for free and is good to start, though you may wanna switch to Hana or Lena whenever possible.",
          tier: "B",
        },

      ],

      [ //Inhibtor
      {
        id: 0,
        name: "Kim Hana",
        image: "./assets/operators/kim_hana.png",
        description: "Gives skill haste boost and extra dp on top of having an extremely easy trigger.",
        tier: "S",
      },        {
        id: 1,
        name: "Lena Mackenzie",
        image: "./assets/operators/lena.png",
        description: "Buffs ASPD for all allies and is relatively easy to trigger.",
        tier: "A",
      },        {
        id: 2,
        name: "Mark Finley",
        image: "./assets/operators/mark.png",
        description: "If you're new to operators, he's given for free and is good to start, though you may wanna switch to Hana or Lena whenever possible.",
        tier: "B",
      },
      ],

      [ //Worm
      {
        id: 0,
        name: "Kim Hana",
        image: "./assets/operators/kim_hana.png",
        description: "Gives skill haste boost and extra dp on top of having an extremely easy trigger.",
        tier: "S",
      },        {
        id: 1,
        name: "Lena Mackenzie",
        image: "./assets/operators/lena.png",
        description: "Buffs ASPD for all allies and is relatively easy to trigger.",
        tier: "A",
      },        {
        id: 2,
        name: "Mark Finley",
        image: "./assets/operators/mark.png",
        description: "If you're new to operators, he's given for free and is good to start, though you may wanna switch to Hana or Lena whenever possible.",
        tier: "B",
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
