import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    heading?: string;
    subheading?: string;
    description?: string;
    supportTeamUrl?: string;
    faqs?: FAQItem[];
}

const HomeFAQ = ({
    heading = "Need Help ?",
    subheading = "We are here to assist.",
    description = "Still have questions ? Feel free to contact our friendly ",
    supportTeamUrl = "#",
    faqs = [
        {
            question: "How is Beavr different from a standard website builder ?",
            answer: "Beavr is for multi-project managers. It lets you manage multiple, separate websites and client lists under one affordable account, avoiding five different logins and subscriptions.",
        },
        {
            question: "Do all my projects share the same client data ?",
            answer: "No, data separation is guaranteed. Each project gets its own dedicated, isolated client database. Your club members will never mix with your freelance clients.",
        },
        {
            question: "Can I use my own domain name for each project ?",
            answer: "Yes. You can connect a unique, custom domain to every single project you manage within Beavr to maintain professional branding.",
        },
        {
            question: "How does team collaboration per project work ?",
            answer: "You invite a team member to work only on the specific project they need. They see nothing else, keeping your other work secure and focused.",
        },
        {
            question: "Is Beavr suitable for non-profits and small businesses ?",
            answer: "Yes, it's perfect for both. Anyone needing a clean website, dedicated client communication tools (like newsletters), and easy project isolation will benefit.",
        },
    ],
}: FAQProps) => {
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
                            <a
                                href={supportTeamUrl}
                                className="underline decoration-2 underline-offset-4 hover:text-primary transition-colors"
                            >
                                support team
                            </a>
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
                                // className="border border-border rounded-lg px-6"
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
