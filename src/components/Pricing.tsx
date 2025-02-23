"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CircleCheck  } from "lucide-react"

const plans = [
    {
        name: "Starter",
        price: "$499",
        features: [
            "2 AI Agent Instances",
            "Basic Neural Processing",
            "24/7 Support",
            "Weekly Analytics",
            "Basic Integration Support"
        ]
    },
    {
        name: "Professional",
        price: "$499",
        features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security"
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: [
            "Unlimited Agents",
            "Full Neural Suite",
            "Dedicated Support Team",
            "Advanced Analytics Dashboard",
            "Custom Development",
            "Full API Access",
            "Enterprise Security",
            "Custom Training"
        ],
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl text-center font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
                    Choose Your Plan
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Scale your AI capabilities with our flexible pricing</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border ${plan.popular ? "border-purple-500" : "border-white/10"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-gray-50">{plan.name}</h3>
                            <p className="text-4xl font-bold mt-2 text-gray-200">{plan.price}
                                {plan.price !== "Custom" && (
                        <span className="text-sm font-normal">/month</span>
                        )}</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CircleCheck className="w-5 h-5 text-purple-500" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
              className={`mt-6 w-full py-2 rounded-lg text-white font-semibold transition-all ${
                plan.name === "Professional"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  : "border border-gray-700 hover:bg-gray-800"
              }`}
            >
              Get Started
            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
