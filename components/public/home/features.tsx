import { Bot, FolderTree, Globe, LayoutDashboard, List, Lock, SquareStack, Users } from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeaturesProps {
    heading?: string;
    subheading?: string;
    features?: Feature[];
}

const HomeFeatures = ({
    heading = "Services Built for Multi-Project Leaders",
    subheading = "Stop paying for five separate tools to manage your projects. Beavr brings all your essential work into one simple, centralized platform. Whether you run clubs, small businesses, or freelance projects",
    features = [
        {
            icon: <FolderTree className="size-6" />,
            title: "The Unified Multi-Project Hub",
            description: "Manage all your independent organizations and workspaces from one Beavr login. Seamlessly switch between projects without ever signing out.",
        },
        {
            icon: <Globe className="size-6" />,
            title: "User-friendly website builder",
            description: "Launch a unique, professional website for every project you manage. Each site keeps its own brand and domain, all controlled from your Beavr account.",
        },
        {
            icon: <Bot className="size-6" />,
            title: "Custom AI Assistant",
            description: "Upload project documents, let us gather data and get a dedicated AI assistant for that project that answers questions based on its context.",
        },
        {
            icon: <List className="size-6" />,
            title: "Clients management",
            description: "Keep every project's client list separate. Easily build forms (surveys, sign-ups) and use the lists for targeted newsletters.",
        },
        {
            icon: <Users className="size-6" />,
            title: "Team collaboration per project",
            description: "Invite team members to work only on the project they need. Use built-in chat and comments to keep communication focused and approvals quick.",
        },
        {
            icon: <LayoutDashboard className="size-6" />,
            title: "Project-specific dashboards",
            description: "Get deep insights into every project. Each organization gets its own dedicated dashboard to track visitors, client growth, and performance.",
        },
    ],
}: FeaturesProps) => {
    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {heading}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {subheading}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-muted rounded-2xl p-8 hover:bg-muted/70 transition-colors"
                        >
                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 bg-background text-primary">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-primary">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
