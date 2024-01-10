'use client'
import connectDB from "@/libs/mongoDb/mongoDb"
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    connectDB()
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
