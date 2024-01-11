'use client'
import connectDB from "@/libs/mongoDb/mongoDb"
import { useEffect } from "react"

export default function Home() {
  async function re(){
    const response  = await fetch("https://fakeuserapi.vercel.app/api/getUser")
    console.log(response)
  }
  useEffect(()=>{
    re()
  })
  return (
    <main>
      <section>
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
          <label className=" flexjustify-center items-center text-white text-2xl px-10 py-2 bg-blue-500 text font-mono rounded-lg shadow-xl">fake User API</label>
        </div>

      </section>
    </main>
  )
}
