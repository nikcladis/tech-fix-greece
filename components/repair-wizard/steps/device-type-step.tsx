"use client";

import { DeviceType } from "@/types/repair";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Laptop, Tablet } from "lucide-react";

const DEVICE_TYPES: { type: DeviceType; label: string; icon: React.ComponentType }[] = [
  { type: "smartphone", label: "Smartphone", icon: Smartphone },
  { type: "laptop", label: "Laptop", icon: Laptop },
  { type: "tablet", label: "Tablet", icon: Tablet },
];

interface DeviceTypeStepProps {
  value?: DeviceType;
  onNext: (type: DeviceType) => void;
}

export function DeviceTypeStep({ value, onNext }: DeviceTypeStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">What type of device needs repair?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DEVICE_TYPES.map(({ type, label, icon: Icon }) => (
          <Button
            key={type}
            variant="outline"
            className={`h-auto p-6 ${value === type ? 'border-primary' : ''}`}
            onClick={() => onNext(type)}
          >
            <div className="flex flex-col items-center space-y-4">
              <Icon className="h-12 w-12" />
              <span className="text-lg font-medium">{label}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}