"use client";
import React, { useState, useEffect, useRef } from 'react';
import { NumberTicker } from "@/components/ui/number-ticker";



interface AnimatedStatProps {
    title: string;
    value: number;
    description: string;
    unit?: string;
}

interface StatsProps {
    heading?: string;
}


const AnimatedNumberStat: React.FC<AnimatedStatProps> = ({ title, value, description, unit }) => {
    
    const [isVisible, setIsVisible] = useState(false);
    const statRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },

            { threshold: 0.1 } 
        );

        const currentRef = statRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

   
    const tickerKey = isVisible ? 'visible' : 'initial';

    return (
       
        <div className="text-center" ref={statRef}>
            <h3 className="text-lg sm:text-xl mb-8 text-foreground">
                {title}
            </h3>

            <div className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 tracking-tight inline-flex items-center justify-center">
                
               
                <NumberTicker key={tickerKey} value={value} />
                
                {unit && <span className="text-7xl sm:text-8xl md:text-9xl font-bold">{unit}</span>}
            </div>

            <p className="text-lg sm:text-xl text-foreground">
                {description}
            </p>
        </div>
    );
};




const HomeStats = ({
    heading = "Proof of Efficiency - Beavr's Impact",
}: StatsProps) => {
    
   
    const stat1: AnimatedStatProps = {
        title: "No more switching tools",
        value: 78,
        description: "less time spent",
        unit: "%" 
    };

    const stat2: AnimatedStatProps = {
        title: "Website performance increase in",
        value: 30,
        description: "days",
    };

    const stat3: AnimatedStatProps = {
        title: "Manage multiple websites",
        value: 1,
        description: "subscription",
    };
    
    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    {heading}
                </h2>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    
                    
                    <AnimatedNumberStat {...stat1} />
                    <AnimatedNumberStat {...stat2} />
                    <AnimatedNumberStat {...stat3} />

                </div>
            </div>
        </section>
    );
};

export default HomeStats;