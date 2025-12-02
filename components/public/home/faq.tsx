"use client";

import { useState } from 'react'; // 1. Import useState hook

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// 2. Import Dialog components for the modal
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter // Optionally import for buttons
} from "@/components/ui/dialog";

// 3. Import Button component to use inside the modal (optional)
import { Button } from "@/components/ui/button"; 


interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    heading?: string;
    subheading?: string;
    description?: string;
    supportTeamText?: string; // Renamed to clarify it's text, not a URL
    faqs?: FAQItem[];
}

const HomeFAQ = ({
    heading = "Need Help ?",
    subheading = "We are here to assist.",
    description = "Still have questions ? Feel free to contact our friendly ",
    supportTeamText = "support team", // Text for the clickable element
    faqs = [
        {
            question: "How is Beavr different from a standard website builder ?",
            answer: "Beavr is for multi-project managers. It lets you manage multiple, separate websites and client lists under one affordable account, avoiding five different logins and subscriptions.",
        },
        // ... (rest of the FAQs)
        {
            question: "Is Beavr suitable for non-profits and small businesses ?",
            answer: "Yes, it's perfect for both. Anyone needing a clean website, dedicated client communication tools (like newsletters), and easy project isolation will benefit.",
        },
    ],
}: FAQProps) => {

    // 4. State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const handleSupportClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent default link/button action
        setIsModalOpen(true);
    };

    return (
        <section className="py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Heading */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            {heading}
                        </h2>
                        <p className="text-2xl sm:text-3xl text-secondary mb-6">
                            {subheading}
                        </p>
                        <p className="text-base sm:text-lg text-foreground">
                            {description}
                            
                            {/* 5. Replace <a> with <button> and wrap in DialogTrigger */}
                            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                                <DialogTrigger asChild>
                                    <button
                                        type="button"
                                        onClick={handleSupportClick} // Manually set state to open
                                        className="underline decoration-2 underline-offset-4 hover:text-primary transition-colors focus:outline-none"
                                    >
                                        {supportTeamText}
                                    </button>
                                </DialogTrigger>
                                
                                {/* 6. The Modal Content */}
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Contact the Support Team</DialogTitle>
                                        <DialogDescription>
                                            Submit your question or issue, and we'll get back to you as soon as possible.
                                        </DialogDescription>
                                    </DialogHeader>
                                    
                                    {/* Placeholder for a contact form or further info */}
                                    <div className="grid gap-4 py-4">
                                        <p className="text-sm text-muted-foreground">
                                            For immediate assistance, please email us at <span className="font-semibold">support@beavr.io</span>.
                                        </p>
                                        {/* You would typically put a form here (e.g., input fields for email/message) */}
                                    </div>
                                    
                                    <DialogFooter>
                                        <Button 
                                            type="button" 
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Close
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            
                            {" specialists."}
                        </p>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div>
                        <Accordion type="single"
                            collapsible
                            className=" w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={`item-${index}`}
                                >
                                    <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeFAQ;