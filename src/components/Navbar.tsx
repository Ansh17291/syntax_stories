import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import navBarmap from "@/utils/NavbarCompoenents";
import { Search } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full px-6 py-4 flex items-center justify-between mt-[70px]">
            {/* Left Circle Placeholder */}
            {/* <div className="h-10 w-10 bg-gray-300 rounded-full ml-[40] " />  */}
            <Avatar className="w-14 h-14 ml-[20px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Center Navigation */}
            <div >
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-4">
                        {navBarmap.map((nav, idx) => (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href={nav.route}
                                        className="text-[20px] px-6 py-2 hover:text-red-400 hover:scale-110 transition-all duration-200 bg-transparent hover:bg-transparent focus:bg-transparent"
                                    >
                                        {nav.title}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Right Search */}
            {/* <div className="w-[200px]"> */}
            {/* <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        /> */}

            {/* </div> */}

            <div className="flex items-center gap-2 cursor-pointer hover:text-red-400 ">
                <Search size={20} />
                <span className="text-md font-medium">Search</span>
            </div>
        </div>
    );
};

export default Navbar;
