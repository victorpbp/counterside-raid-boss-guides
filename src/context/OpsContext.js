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
          description: "Great support for overall skill haste boost and slight dp boost as well. Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well. Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well. Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well. Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },        {
          id: 0,
          name: "Kim Hana",
          image: "./assets/operators/kim_hana.png",
          description: "Great support for overall skill haste boost and slight dp boost as well.",
          tier: "S",
        },

      ],

      [ //Inhibtor
        {
          id: 0,
          name: "Serena Crew",
          image: "",
          description: "",
          tier: "",
        },

      ],

      [ //Worm
        {
          id: 0,
          name: "Lena",
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
