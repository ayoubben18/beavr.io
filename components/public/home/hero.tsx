import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
    launchArticle?: {
        title: string;
        url: string;
    };
    heading?: string;
    subheading?: {
        beforeHighlight: string;
        highlight: string;
        afterHighlight: string;
    };
    cta?: {
        primary: {
            title: string;
            url: string;
        };
        secondary: {
            title: string;
            url: string;
        };
    };
}

const HomeHero = ({
    launchArticle = {
        title: "Our launch article",
        url: "#",
    },
    heading = "Manage All Your Projects From One Simple Place",
    subheading = {
        beforeHighlight: "",
        highlight: "Beavr.io",
        afterHighlight: " is the only platform built for people who run multiple businesses, clubs, or projects. Launch unique websites, manage separate client lists, and collaborate with teams all with a single login",
    },
    cta = {
        primary: { title: "Get started", url: "#" },
        secondary: { title: "How it works", url: "#" },
    },
}: HeroProps) => {
    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Launch Article Link */}
                <div className="flex justify-center mb-8">
                    <a
                        href={launchArticle.url}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-muted transition-colors text-sm"
                    >
                        <span>{launchArticle.title}</span>
                        <ArrowRight className="size-4" />
                    </a>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
                    {heading}
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                    {subheading.beforeHighlight}
                    <span className="font-semibold text-foreground">
                        {subheading.highlight}
                    </span>
                    {subheading.afterHighlight}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg">
                        <a href={cta.primary.url}>{cta.primary.title}</a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href={cta.secondary.url}>{cta.secondary.title}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
