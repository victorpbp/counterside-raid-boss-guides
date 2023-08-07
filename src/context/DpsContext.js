import React, { useContext, useState } from "react"

const DpsContext = React.createContext()

const counter = "./assets/roles/counter.png"
const mech = "./assets/roles/mech.png"
const soldier = "./assets/roles/soldier.png"

const defender = "./assets/roles/defender.png"
const ranger = "./assets/roles/ranger.png"
const siege = "./assets/roles/siege.png"
const sniper = "./assets/roles/sniper.png"
const striker = "./assets/roles/striker.png"
const supporter = "./assets/roles/supporter.png"
const tower = "./assets/roles/tower.png"

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
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Awakened Seo Yoon",
          image: "./assets/characters/aseoyoon.png",
          description: "INSANELY POWERFUL",
          role: ranger,
          kind: counter,
          rearm: false,
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
