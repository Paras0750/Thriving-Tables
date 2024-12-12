"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const demoPrices = [
  {
    id: "tier_1",
    name: "Tier 1",
    description: "Build Brand Awareness & Attract New Customers",
    features: [
      "Guaranteed new guests (30+ covers in the first 90 days).",
      "Improved rankings on review sites through guest reviews.",
      "Higher search engine rankings (if you have a website; we can build one for a low cost if needed).",
      "Up to 4 posts per month on your established social media accounts."
    ],
    monthlyPrice: 75000,
    yearlyPrice: 750000,
    setupPrice: 1000,
    isMostPopular: false,
  },
  {
    id: "tier_2",
    name: "Tier 2",
    description: "Attract & Engage Returning Customers",
    features: [
      "Includes all Tier 1 benefits, plus:",
      "Content creation.",
      "Profile setup or updates on top review sites (e.g., OpenTable).",
      "Basic website creation (if needed) or edits to improve your current website.",
      "SEO audits and improvements to boost search rankings.",
      "Basic menu suggestions to enhance appeal.",
      "Digital marketing strategy recommendations (targeted ads, email, and SMS campaigns)."
    ],
    monthlyPrice: 100000,
    yearlyPrice: 1000000,
    setupPrice: 1500,
    isMostPopular: false,
  },
  {
    id: "tier_3",
    name: "Tier 3",
    description: "Comprehensive Marketing & Guest Experience Management",
    features: [
      "Includes everything in Tiers 1 & 2, plus:",
      "Full social media management (including customer engagement).",
      "Full review site management (driving reviews and responding to feedback).",
      "Website management (SEO-optimized, you handle hosting costs).",
      "Local market research and recommendations.",
      "Review of food delivery strategy (DoorDash, UberEats, etc.).",
      "Food tasting by a local expert with menu feedback.",
      "PR assistance to increase visibility.",
      "Full digital marketing management (ads, email, SMS campaigns; ad spend is separate)."
    ],
    monthlyPrice: 150000,
    yearlyPrice: 1500000,
    setupPrice: 2500,
    isMostPopular: true,
  },
  {
    id: "platinum",
    name: "Platinum Plan",
    description: "Custom Consulting for Maximum Impact",
    features: [
      "All of the above services, plus:",
      "Multiple food expert visits with feedback.",
      "Detailed menu, environment, and signage recommendations.",
      "Operational process review (staff evaluation, efficiency improvements).",
      "Financial review to identify and negotiate cost savings.",
      "Enhanced PR strategy for greater exposure.",
      "In-depth local market research for deeper insights."
    ],
    monthlyPrice: null,
    yearlyPrice: null,
    setupPrice: null,
    isMostPopular: false,
  }
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h4>

          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple pricing for everyone.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Don&apos;t wait another week to <strong>turn your restaurant around!</strong> <br />
            Choose an <strong>affordable plan</strong> that&apos;s packed with <br />
            the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "year"
                    ? toHumanPrice(price.yearlyPrice ?? 0, 0)
                    : toHumanPrice(price.monthlyPrice ?? 0, 0)}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
