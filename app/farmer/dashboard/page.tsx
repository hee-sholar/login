"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, DollarSign, ShoppingBag, TrendingUp, Plus, Eye } from "lucide-react"

export default function FarmerDashboard() {
  const { user } = useAuth()

  const stats = [
    {
      title: "Total Products",
      value: "24",
      description: "Active listings",
      icon: Package,
      color: "text-green-600",
    },
    {
      title: "Total Revenue",
      value: "$3,240",
      description: "This month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: "18",
      description: "Pending fulfillment",
      icon: ShoppingBag,
      color: "text-orange-600",
    },
    {
      title: "Growth",
      value: "+12%",
      description: "From last month",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  const recentProducts = [
    { name: "Organic Tomatoes", price: "$4.50/kg", status: "Active", stock: "50 kg" },
    { name: "Fresh Carrots", price: "$2.30/kg", status: "Low Stock", stock: "5 kg" },
    { name: "Green Lettuce", price: "$3.20/head", status: "Active", stock: "30 heads" },
    { name: "Bell Peppers", price: "$5.80/kg", status: "Out of Stock", stock: "0 kg" },
  ]

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800">Welcome back, {user?.name}!</h1>
          <p className="text-green-600 mt-2">Here's what's happening with your farm today.</p>
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

        {/* Recent Products */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Products</CardTitle>
                <CardDescription>Manage your product listings and inventory</CardDescription>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{product.stock}</p>
                      <Badge
                        variant={
                          product.status === "Active"
                            ? "default"
                            : product.status === "Low Stock"
                              ? "secondary"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
