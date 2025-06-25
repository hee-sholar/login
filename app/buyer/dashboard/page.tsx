"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Package, Star, Search, Filter } from "lucide-react"

export default function BuyerDashboard() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Total Orders",
      value: "12",
      description: "This month",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Favorites",
      value: "8",
      description: "Saved products",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Cart Items",
      value: "3",
      description: "Ready to checkout",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Reviews",
      value: "15",
      description: "Products reviewed",
      icon: Star,
      color: "text-yellow-600",
    },
  ]

  const featuredProducts = [
    {
      name: "Organic Tomatoes",
      farmer: "Green Valley Farm",
      price: "$4.50/kg",
      rating: 4.8,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Fresh Carrots",
      farmer: "Sunny Acres",
      price: "$2.30/kg",
      rating: 4.6,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Green Lettuce",
      farmer: "Organic Gardens",
      price: "$3.20/head",
      rating: 4.9,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Bell Peppers",
      farmer: "Fresh Fields",
      price: "$5.80/kg",
      rating: 4.7,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Welcome back, {user?.name}!</h1>
          <p className="text-blue-600 mt-2">Discover fresh produce from local farmers.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Featured Products */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Featured Products</CardTitle>
                <CardDescription>Fresh produce from verified farmers</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Browse All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.farmer}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-blue-600">{product.price}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
