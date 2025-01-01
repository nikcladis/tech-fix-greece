"use client";

import { useState } from "react";
import { DeviceType, BrandType } from "@/types/repair";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { deviceBrands } from "@/lib/repair-data";

interface BrandModelStepProps {
  deviceType: DeviceType;
  value: { brand?: BrandType; model?: string };
  onNext: (data: { brand: BrandType; model: string }) => void;
  onBack: () => void;
}

export function BrandModelStep({ deviceType, value, onNext, onBack }: BrandModelStepProps) {
  const [brand, setBrand] = useState<BrandType | undefined>(value.brand);
  const [model, setModel] = useState<string | undefined>(value.model);

  const brands = deviceBrands[deviceType];
  const models = brand ? brands.find(b => b.id === brand)?.models : [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Select your device brand and model</h2>
      
      <div className="space-y-4">
        <Select value={brand} onValueChange={(value: BrandType) => setBrand(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.id}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {brand && (
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {models?.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={() => brand && model && onNext({ brand, model })}
          disabled={!brand || !model}
        >
          Next
        </Button>
      </div>
    </div>
  );
}