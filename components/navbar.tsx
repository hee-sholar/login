"use client"

import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tractor, ShoppingCart, BarChart3, Package, ShoppingBag, Heart, User, LogOut } from "lucide-react"

export function Navbar() {
  const { user, logout } = useAuth()

  if (!user) return null

  const isFarmer = user.role === "farmer"
  const navItems = isFarmer
    ? [
        { href: "/farmer/dashboard", label: "Dashboard", icon: BarChart3 },
        { href: "/farmer/products", label: "My Products", icon: Package },
        { href: "/farmer/orders", label: "Orders", icon: ShoppingBag },
      ]
    : [
        { href: "/buyer/dashboard", label: "Dashboard", icon: BarChart3 },
        { href: "/buyer/marketplace", label: "Marketplace", icon: ShoppingCart },
        { href: "/buyer/orders", label: "My Orders", icon: ShoppingBag },
        { href: "/buyer/favorites", label: "Favorites", icon: Heart },
      ]

  return (
    <nav className={`border-b ${isFarmer ? "bg-green-50" : "bg-blue-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {isFarmer ? (
                <Tractor className="h-8 w-8 text-green-600" />
              ) : (
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              )}
              <span className={`text-xl font-bold ${isFarmer ? "text-green-700" : "text-blue-700"}`}>AgriMarket</span>
            </Link>

            <div className="hidden md:flex ml-10 space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isFarmer
                        ? "text-green-700 hover:text-green-900 hover:bg-green-100"
                        : "text-blue-700 hover:text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-sm font-medium ${isFarmer ? "text-green-700" : "text-blue-700"}`}>
              {isFarmer ? "Farmer Portal" : "Buyer Portal"}
            </span>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={isFarmer ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
