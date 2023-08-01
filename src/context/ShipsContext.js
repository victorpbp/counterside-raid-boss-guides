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
          name: "Enterprise",
          image: "./assets/ships/enterprise.png",
          description: "Buffs Counters and Mechs and can debuff with one of the skills. Great all around and covers the majority of the great units for raids.",
          tier: "S",
        },        {
          id: 1,
          name: "Kamiizumi",
          image: "./assets/ships/kamiizumi.png",
          description: "Massively increases everything CRIT related. Amazing for raids since it benefits basically the entire team and some of the biggest DPS's in the game.",
          tier: "S",
        },        {
          id: 2,
          name: "AHAB",
          image: "./assets/ships/ahab.png",
          description: "Focuses on buffing Rangers and Snipers with their ASPD, great augment considering many of the heavy hitters fall under these two classes. Even moreso in the future with some new key characters.",
          tier: "S",
        },        {
          id: 3,
          name: "Gleipnir",
          image: "./assets/ships/gleipnir.png",
          description: "If you're new, this is the ship you wanna go for until you can acquire one of the other options listed. This ship buffs Counters which, for early game, is likely to be the main source of damage and basically your entire team anyway.",
          tier: "A",
        },

      ],

      [ //Inhibtor
      {
        id: 0,
        name: "Enterprise",
        image: "./assets/ships/enterprise.png",
        description: "Buffs Counters and Mechs and can debuff with one of the skills. Great all around and covers the majority of the great units for raids.",
        tier: "S",
      },        {
        id: 1,
        name: "Kamiizumi",
        image: "./assets/ships/kamiizumi.png",
        description: "Massively increases everything CRIT related. Amazing for raids since it benefits basically the entire team and some of the biggest DPS's in the game.",
        tier: "S",
      },        {
        id: 2,
        name: "AHAB",
        image: "./assets/ships/ahab.png",
        description: "Focuses on buffing Rangers and Snipers with their ASPD, great augment considering many of the heavy hitters fall under these two classes. Even moreso in the future with some new key characters.",
        tier: "S",
      },        {
        id: 3,
        name: "Gleipnir",
        image: "./assets/ships/gleipnir.png",
        description: "If you're new, this is the ship you wanna go for until you can acquire one of the other options listed. This ship buffs Counters which, for early game, is likely to be the main source of damage and basically your entire team anyway.",
        tier: "A",
      },

      ],

      [ //Worm
      {
        id: 0,
        name: "Enterprise",
        image: "./assets/ships/enterprise.png",
        description: "Buffs Counters and Mechs and can debuff with one of the skills. Great all around and covers the majority of the great units for raids.",
        tier: "S",
      },        {
        id: 1,
        name: "Kamiizumi",
        image: "./assets/ships/kamiizumi.png",
        description: "Massively increases everything CRIT related. Amazing for raids since it benefits basically the entire team and some of the biggest DPS's in the game.",
        tier: "S",
      },        {
        id: 2,
        name: "AHAB",
        image: "./assets/ships/ahab.png",
        description: "Focuses on buffing Rangers and Snipers with their ASPD, great augment considering many of the heavy hitters fall under these two classes. Even moreso in the future with some new key characters.",
        tier: "S",
      },        {
        id: 3,
        name: "Gleipnir",
        image: "./assets/ships/gleipnir.png",
        description: "If you're new, this is the ship you wanna go for until you can acquire one of the other options listed. This ship buffs Counters which, for early game, is likely to be the main source of damage and basically your entire team anyway.",
        tier: "A",
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
