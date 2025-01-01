import { DeviceType, DeviceBrand, RepairIssue } from "@/types/repair";

export const deviceBrands: Record<DeviceType, DeviceBrand[]> = {
  smartphone: [
    {
      id: "apple",
      name: "Apple",
      models: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 14", "iPhone 13", "iPhone 12"],
    },
    {
      id: "samsung",
      name: "Samsung",
      models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23", "Galaxy A54"],
    },
  ],
  laptop: [
    {
      id: "apple",
      name: "Apple",
      models: ["MacBook Pro 14″", "MacBook Pro 16″", "MacBook Air M2", "MacBook Air M1"],
    },
    {
      id: "lenovo",
      name: "Lenovo",
      models: ["ThinkPad X1 Carbon", "ThinkPad T14", "IdeaPad 5"],
    },
  ],
  tablet: [
    {
      id: "apple",
      name: "Apple",
      models: ["iPad Pro 12.9″", "iPad Pro 11″", "iPad Air", "iPad mini"],
    },
    {
      id: "samsung",
      name: "Samsung",
      models: ["Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9"],
    },
  ],
};

export const commonIssues: Record<DeviceType, RepairIssue[]> = {
  smartphone: [
    {
      id: "screen",
      name: "Screen Replacement",
      description: "Repair cracked or broken screen",
      estimatedCost: { min: 80, max: 350 },
      estimatedTime: "1-2 hours",
    },
    {
      id: "battery",
      name: "Battery Replacement",
      description: "Replace old or damaged battery",
      estimatedCost: { min: 45, max: 120 },
      estimatedTime: "30-60 minutes",
    },
  ],
  laptop: [
    {
      id: "screen",
      name: "Screen Replacement",
      description: "Replace broken or damaged screen",
      estimatedCost: { min: 150, max: 600 },
      estimatedTime: "2-3 hours",
    },
    {
      id: "keyboard",
      name: "Keyboard Replacement",
      description: "Replace faulty keyboard",
      estimatedCost: { min: 80, max: 250 },
      estimatedTime: "1-2 hours",
    },
  ],
  tablet: [
    {
      id: "screen",
      name: "Screen Replacement",
      description: "Fix cracked or broken screen",
      estimatedCost: { min: 120, max: 450 },
      estimatedTime: "1-2 hours",
    },
    {
      id: "charging",
      name: "Charging Port Repair",
      description: "Repair or replace charging port",
      estimatedCost: { min: 60, max: 180 },
      estimatedTime: "1-2 hours",
    },
  ],
};