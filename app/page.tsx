import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tractor, ShoppingCart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to AgriMarket</h1>
          <p className="text-xl text-gray-600">Choose your role to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Tractor className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Farmer</CardTitle>
              <CardDescription className="text-lg">Sell your fresh produce directly to buyers</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• List your products</li>
                <li>• Manage inventory</li>
                <li>• Track sales</li>
                <li>• Connect with buyers</li>
              </ul>
              <Link href="/farmer/login">
                <Button className="w-full bg-green-600 hover:bg-green-700">Login as Farmer</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-blue-700">Buyer</CardTitle>
              <CardDescription className="text-lg">Purchase fresh produce directly from farmers</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Browse fresh products</li>
                <li>• Place orders</li>
                <li>• Track purchases</li>
                <li>• Rate farmers</li>
              </ul>
              <Link href="/buyer/login">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Login as Buyer</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
