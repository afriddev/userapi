'use client'
import connectDB from "@/libs/mongoDb/mongoDb"
import { useEffect } from "react"

export default function Home() {
  async function re(){
    const response  = await fetch("api/getUser",{
      method:"POST",
     body: JSON.stringify({a: 1, b: 'Textual content'})
    })
    console.log(response)
  }
  useEffect(()=>{
    re()
  })
  return (
    <main>
      <section>
        <div>
          <label>fakeUserAPI</label>
        </div>

      </section>
    </main>
  )
}
