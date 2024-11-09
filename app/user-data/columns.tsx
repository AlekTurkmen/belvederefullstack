"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the shape of the UserData
export type UserData = {
  id: string
  username: string
  email: string
  total: number
  connections: number
  emailing: number
  meeting: number
  status: "free" | "paid"
}

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "connections",
    header: "Connections",
  },
  {
    accessorKey: "emailing",
    header: "Emailing",
  },
  {
    accessorKey: "meeting",
    header: "Meeting",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
