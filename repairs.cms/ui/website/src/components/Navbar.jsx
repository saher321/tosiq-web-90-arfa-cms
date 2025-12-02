import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Navbar = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full">
            <NavigationMenu className="rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-sm">
                <NavigationMenuList className="px-2 py-1">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="/"
                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 rounded-full")}
                        >
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="/about"
                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 rounded-full")}
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="/contact"
                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/50 data-[active]:bg-accent/50 rounded-full")}
                        >
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default Navbar
