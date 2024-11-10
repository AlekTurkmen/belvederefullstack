"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const duration = 3000 // Total duration in milliseconds
    const targetValue = 3/21 * 100

    const smootherstep = (t: number) => 6 * t ** 5 - 15 * t ** 4 + 10 * t ** 3

    const startTime = performance.now()

    const updateProgress = () => {
      const elapsed = performance.now() - startTime
      const t = Math.min(elapsed / duration, 1) // Clamp t between 0 and 1
      const easedProgress = smootherstep(t) * targetValue
      setProgress(easedProgress)

      if (t < 1) {
        requestId = requestAnimationFrame(updateProgress) // Update requestId here
      }
    }

    let requestId = requestAnimationFrame(updateProgress)

    return () => cancelAnimationFrame(requestId) // Pass requestId to cancelAnimationFrame
  }, [])

  return (
    <div className="flex flex-col items-center">
        <Progress value={progress} className="w-[60vw]" /> {/* Adjusted width to 60% of viewport width */}
        <span className="mt-2 text-lg font-semibold">We are about {progress.toFixed(2)}% the way there.</span> {/* Display progress with 2 decimal places */}
    </div>

  )
}

export default ProgressDemo
