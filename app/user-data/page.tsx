"use client"

import { UserData, columns } from "./columns"
import { DataTable } from "./data-table"
import * as React from "react"

// Async function to fetch data
async function getData(): Promise<UserData[]> {
  // Fetch data from your API here.
  return [
    {
      id: "00001",
      username: "alekturkmen",
      email: "alek@belvedere.com",
      total: 6600,
      connections: 554,
      emailing: 5,
      meeting: 3,
      status: "FREE",
    },
    {
      id: "00002",
      username: "janesmith",
      email: "jane@belvedere.com",
      total: 6600,
      connections: 198,
      emailing: 10,
      meeting: 8,
      status: "PAID",
    },
    {
      id: "00003",
      username: "alicewonder",
      email: "alice@belvedere.com",
      total: 6600,
      connections: 54,
      emailing: 15,
      meeting: 4,
      status: "FREE",
    },
  ]
}

// Intermediate component to handle data fetching and loading state
function Data() {
  const [data, setData] = React.useState<UserData[] | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      const fetchedData = await getData()
      setData(fetchedData)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>No data available.</div>

  return <DataTable columns={columns} data={data} />
}

// Main Home component
export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/user-data"
          rel="noopener noreferrer"
        >
          User Data Testing
        </a>
      </header>

      <main>
        <div className="container mx-auto py-10">
          <Data /> {/* Render the Data component that handles fetching and displays DataTable */}
        </div>
      </main>
    </div>
  )
}
