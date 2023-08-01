import React, { useContext, useState } from "react"

const DpsContext = React.createContext()

export function useDPS() {
  return useContext(DpsContext)
}

export function DpsProvider({ children }) {

  const [dps] = useState (
    [

      //Put all the dps's here, each dps has its own object inside the array
      //Don't forget the commas and the right id.
      // Keep in mind, while in the same array, it's the same boss, when changing arrays, it's a different boss.

      [ //Britra
        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          tier: "S",
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "",
          description: "",
          tier: "",
        },

      ],

    ]
  )


  return (
    <DpsContext.Provider value = {dps} >
      {children}
    </DpsContext.Provider>
  )

}
