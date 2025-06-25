import { type NextRequest, NextResponse } from "next/server"

// Mock buyer database
const buyers = [
  {
    id: "1",
    email: "buyer@demo.com",
    password: "password123",
    name: "Alice Brown",
    address: "123 Main St, City",
  },
  {
    id: "2",
    email: "sarah@buyer.com",
    password: "password123",
    name: "Sarah Wilson",
    address: "456 Oak Ave, Town",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find buyer by email and password
    const buyer = buyers.find((b) => b.email === email && b.password === password)

    if (!buyer) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Return buyer data (excluding password)
    const { password: _, ...buyerData } = buyer

    return NextResponse.json({
      success: true,
      user: buyerData,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
