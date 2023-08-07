import React, { useContext, useState } from "react"

const SupportsContext = React.createContext()

export function useSupports() {
  return useContext(SupportsContext)
}

export function SupportsProvider({ children }) {

  const [supports] = useState (

    [

      //Put all the supports here, each support has its own object inside the array
      //Don't forget the commas and the right id.
      // Keep in mind, while in the same array, it's the same boss, when changing arrays, it's a different boss.

      [ //Britra
        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "INSANELY POWERFUL",
          role: "./assets/roles/supporter.png",
        },

      ],

    ]
  )


  return (
    <SupportsContext.Provider value = {supports} >
      {children}
    </SupportsContext.Provider>
  )

}
