import { type NextRequest, NextResponse } from "next/server"

// Mock farmer database
const farmers = [
  {
    id: "1",
    email: "farmer@demo.com",
    password: "password123",
    name: "John Smith",
    farm: "Green Valley Farm",
  },
  {
    id: "2",
    email: "mary@farm.com",
    password: "password123",
    name: "Mary Johnson",
    farm: "Sunny Acres",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find farmer by email and password
    const farmer = farmers.find((f) => f.email === email && f.password === password)

    if (!farmer) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Return farmer data (excluding password)
    const { password: _, ...farmerData } = farmer

    return NextResponse.json({
      success: true,
      user: farmerData,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
