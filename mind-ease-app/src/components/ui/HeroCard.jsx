import React from "react";
import { Card, CardContent } from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShieldAlt, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";

const HeroCard = () => {
    const features = [
        {
            icon: faHeart,
            title: "Expert Care",
            description: "Connect with licensed psychiatrists and psychologists"
        },
        {
            icon: faShieldAlt,
            title: "Secure & Private",
            description: "Your conversation are completely confidential"
        },
        {
            icon: faClock,
            title: "Flexible Scheduling",
            description: "Book appointments that fit your schedule"
        },
        {
            icon: faUsers,
            title: "Personalized Match",
            description: "Find the right therapist for your specific needs"
        }
    ]
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6 mb-16">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-4">
                            <div className="w-10 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FontAwesomeIcon icon={Icon} className="h-6 w-6 text-gray-600" aria-hidden="true" />
                            </div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

export default HeroCard;
