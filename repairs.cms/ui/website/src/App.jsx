import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Navbar />
      <div className="pt-32 px-4 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Website</h1>
        <Button>Button</Button>
      </div>
    </div>
  )
}

export default App
