interface Stat {
    title: string;
    value: string;
    description: string;
}

interface StatsProps {
    heading?: string;
    stats?: Stat[];
}

const HomeStats = ({
    heading = "Proof of Efficiency - Beavr's Impact",
    stats = [
        {
            title: "No more switching tools",
            value: "78%",
            description: "less time spent",
        },
        {
            title: "Website performance increase in",
            value: "30",
            description: "days",
        },
        {
            title: "Manage multiple websites",
            value: "1",
            description: "subscription",
        },
    ],
}: StatsProps) => {
    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    {heading}
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            {/* Title */}
                            <h3 className="text-lg sm:text-xl mb-8 text-foreground">
                                {stat.title}
                            </h3>

                            {/* Value */}
                            <div className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 tracking-tight">
                                {stat.value}
                            </div>

                            {/* Description */}
                            <p className="text-lg sm:text-xl text-foreground">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeStats;
