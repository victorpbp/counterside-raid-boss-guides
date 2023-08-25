import React, { useContext, useState } from "react"

const SupportsContext = React.createContext()

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
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },

      ],

      [ //Inhibtor
        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
        },

      ],

      [ //Worm
        {
          name: "Awakened Shin Jia",
          image: "./assets/characters/ashinjia.png",
          description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
          role: supporter,
          kind: counter,
          rearm: false,
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
