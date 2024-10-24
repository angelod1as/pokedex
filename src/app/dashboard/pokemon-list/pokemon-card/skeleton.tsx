import { Card } from "@/app/components/card";
import { Tag } from "@/app/components/tag";
import React from "react";

export const PokemonCardSkeleton = async () => {
  return (
    <Card>
      <div className="w-[200px] h-[200px] bg-skeleton animate-pulse rounded-3xl" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 bg-skeleton animate-pulse w-[93px] h-[28px] rounded-3xl" />
      </div>
      <div>
        {[1, 2].map((item) => (
          <Tag key={item} label="" skeleton />
        ))}
      </div>
    </Card>
  );
};
