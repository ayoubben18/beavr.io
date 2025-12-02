/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Logo from "@/public/logo.svg";
import {Linkedin, Mail} from "lucide-react";

interface FooterLink {
    title: string;
    url: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    logo?: {
        src: string;
        alt: string;
        url: string;
    };
    description?: string;
    sections?: FooterSection[];
    socialLinks?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
    bottomLinks?: FooterLink[];
    copyright?: string;
}

const Footer = ({
    logo = {
        src: Logo,
        alt: "Beavr.io",
        url: "/",
    },
    description = "A platform built for people who run multiple businesses, clubs, or projects.",
    sections = [
        {
            title: "Product",
            links: [
                { title: "Overview", url: "#" },
                { title: "Pricing", url: "#" },
                { title: "Services", url: "#" },
                { title: "How it works", url: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { title: "Help", url: "#" },
                { title: "Docs", url: "#" },
                { title: "Privacy", url: "#" },
            ],
        },

    ],
    bottomLinks = [
        { title: "Privacy Policy", url: "#" },
        { title: "Terms of Service", url: "#" },
    ],
    copyright = `© ${new Date().getFullYear()} Beavr.io. All rights reserved.`,
}: FooterProps) => {
    return (
        <footer className="border-t border-border bg-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
                {/* Main Footer Content */}
                <div className="mb-12 flex lg:flex-row flex-col gap-10 justify-between">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <a href={logo.url} className="inline-block mb-4">
                            <Image
                                src={logo.src}
                                width={120}
                                height={120}
                                className="max-h-8 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                        </p>
                        <div className="flex gap-6">
                            <Mail className="size-4" />
                            <Linkedin className="size-4" />
                        </div>
                    </div>

                    <div className=" flex gap-20">
                        {/* Footer Sections */}
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="font-semibold text-foreground mb-4">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.url}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}</div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-primary">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground">
                            {copyright}
                        </p>

                        {/* Bottom Links */}
                        <div className="flex flex-wrap items-center gap-6">
                            {bottomLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.url}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
