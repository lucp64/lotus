"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  UserCog,
  Megaphone,
  PenTool,
  Library,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Users,
  FolderOpen,
  LinkIcon,
} from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  {
    name: "Account Setup",
    icon: UserCog,
    subItems: [
      { name: "Brand", href: "/account-setup/brand", icon: BookOpen },
      { name: "Personas", href: "/account-setup/personas", icon: Users },
      { name: "Assets", href: "/account-setup/assets", icon: FolderOpen },
    ],
  },
  { name: "Campaigns", href: "/campaign-setup", icon: Megaphone },
  { name: "Ad Creation", href: "/ad-creation", icon: PenTool },
  { name: "Ad Library", href: "/ad-library", icon: Library },
]

const bottomNavItems = [
  { name: "Integrations", href: "/integrations", icon: LinkIcon },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["Account Setup"])

  const toggleExpand = (name: string) => {
    setExpandedItems((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const isSubPathActive = (item: any) => {
    if (!item.subItems) return false
    return item.subItems.some((subItem: any) => pathname === subItem.href)
  }

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:bg-white md:border-r md:dark:bg-gray-800 md:dark:border-gray-700">
      <div className="flex items-center h-16 px-6 border-b dark:border-gray-700">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            L
          </div>
          <span className="text-xl font-bold">Lotus</span>
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1 px-4 py-6">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const hasSubItems = !!item.subItems
            const isActive = pathname === item.href || isSubPathActive(item)
            const isExpanded = expandedItems.includes(item.name)

            return (
              <div key={item.name}>
                {hasSubItems ? (
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md",
                      isActive
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-purple-500" : "text-gray-400")} />
                      {item.name}
                    </div>
                    {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                      isActive
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                    )}
                  >
                    <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-purple-500" : "text-gray-400")} />
                    {item.name}
                  </Link>
                )}

                {hasSubItems && isExpanded && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem: any) => {
                      const isSubActive = pathname === subItem.href
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                            isSubActive
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100"
                              : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                          )}
                        >
                          <subItem.icon
                            className={cn("mr-3 h-4 w-4", isSubActive ? "text-purple-500" : "text-gray-400")}
                          />
                          {subItem.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <nav className="space-y-1 pt-6 border-t dark:border-gray-700">
          {bottomNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
