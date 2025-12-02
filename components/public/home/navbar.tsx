/* eslint-disable @next/next/no-img-element */
import { Globe, Users, Bot, List, LayoutDashboard, Menu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/public/logo.svg"
import Image from "next/image";
interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface HomeNavbarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const HomeNavbar = ({
    logo = {
        url: "/",
        src: Logo,
        alt: "Beavr.io",
        title: "",
    },
    menu = [
        { title: "Our mission", url: "#" },
        {
            title: "Services",
            url: "#",
            items: [
                {
                    title: "Website builder",
                    description: "Create your organization's website in minutes",
                    icon: <Globe className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Client management",
                    description: "Manage your clients database clearly",
                    icon: <List className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Custom AI assistant",
                    description: "Get a customized AI assistant for your organization",
                    icon: <Bot className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Centralized dashboard",
                    description: "Manage your organization's information in a centralized dashboard",
                    icon: <LayoutDashboard className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title:"Team collaboration",
                    description: "Collaborate with your organization's members",
                    icon: <Users className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "How it works",
            url: "#"
        },
        {
            title: "Pricing",
            url: "#",
        },
        {
            title: "Help",
            url: "#",
        },
    ],
    auth = {
        login: { title: "Log In", url: "#" },
        signup: { title: "Sign Up", url: "#" },
    },
}: HomeNavbarProps) => {
    return (
        <section className="py-4 px-4 sm:px-8">
            <div >
                {/* Desktop Menu */}
                <nav className="hidden items-center justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <Image
                                src={logo.src}
                                width={180}
                                height={180}
                                className="max-h-8 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                            <a href={auth.login.url}>{auth.login.title}</a>
                        </Button>
                        <Button asChild size="sm">
                            <a href={auth.signup.url}>{auth.signup.title}</a>
                        </Button>
                    </div>
                </nav>
                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <Image
                                src={logo.src}
                                width={100}
                                height={100}
                                className="max-h-8 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a href={logo.url} className="flex items-center gap-2">
                                            <Image
                                                src={logo.src}
                                                width={100}
                                                height={100}
                                                className="max-h-8 dark:invert"
                                                alt={logo.alt}
                                            />
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                    <div className="flex flex-col gap-3">
                                        <Button asChild variant="outline">
                                            <a  href={auth.login.url}>{auth.login.title}</a>
                                        </Button>
                                        <Button asChild>
                                            <a href={auth.signup.url}>{auth.signup.title}</a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section >
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="hover:bg-muted hover:text-primary">{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title} className="w-80">
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }
    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="bg-background hover:bg-muted hover:text-primary group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }
    return (
        <a key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <a
            className="hover:bg-muted hover:text-primary flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-muted-foreground text-sm leading-snug">
                        {item.description}
                    </p>
                )}
            </div>
        </a>
    );
};

export default HomeNavbar;
