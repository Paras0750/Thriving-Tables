import React from "react";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { Icons } from "@/components/ui/icons";

const HowDoWeHelp = () => {
  return (
    <div className="container mt-60">
      {/* Section Header */}
      <h1 className="text-center text-4xl font-bold mb-8">
        How do we help?
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1. We Bring You Customers */}
        <MagicCard className="p-6">
          <Icons.users className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            We Bring You Customers
          </h3>
          <p className="text-muted-foreground">
            With our Customer Circles, we tap into a large network of families, businesses, and diners 
            to get them into your restaurant regularly. We also effectively market your restaurant and concept. 
            We only work in select areas and have a limit on the types of restaurants in each area.
          </p>
        </MagicCard>

        {/* 2. We Help Your Restaurant Grow */}
        <MagicCard className="p-6">
          <Icons.growth className="w-12 h-12 text-success mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            We Help Your Restaurant Grow
          </h3>
          <p className="text-muted-foreground">
            Ever wonder why the place down the street is booming while you&apos;re struggling? We pinpoint 
            what&apos;s holding you back and help you fix it so you can finally stop stressing about bills.
          </p>
        </MagicCard>

        {/* 3. We Make You Money */}
        <MagicCard className="p-6">
          <Icons.money className="w-12 h-12 text-warning mb-4" />
          <h3 className="text-2xl font-semibold mb-4">
            We Make You Money—Lots of It!
          </h3>
          <p className="text-muted-foreground">
            Our clients often see a 10x or more return on what they invest with us. And we aim for even better!
          </p>
        </MagicCard>
      </div>
    </div>
  );
};

export default HowDoWeHelp;
