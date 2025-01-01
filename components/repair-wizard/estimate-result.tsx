"use client";

import { EstimateFormData, RepairIssue } from "@/types/repair";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { commonIssues } from "@/lib/repair-data";
import { Check } from "lucide-react";

interface EstimateResultProps {
  formData: EstimateFormData;
}

export function EstimateResult({ formData }: EstimateResultProps) {
  const selectedIssues = commonIssues[formData.deviceType].filter(
    (issue) => formData.issues.includes(issue.id)
  );

  const totalCost = selectedIssues.reduce(
    (acc, issue) => ({
      min: acc.min + issue.estimatedCost.min,
      max: acc.max + issue.estimatedCost.max,
    }),
    { min: 0, max: 0 }
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Check className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Your Repair Estimate</h2>
        <p className="text-muted-foreground">
          We'll contact you shortly to confirm your repair appointment
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Device Information</h3>
          <p>Type: {formData.deviceType}</p>
          <p>Brand: {formData.brand}</p>
          <p>Model: {formData.model}</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Selected Repairs</h3>
          <ul className="space-y-2">
            {selectedIssues.map((issue) => (
              <li key={issue.id} className="flex justify-between">
                <span>{issue.name}</span>
                <span>€{issue.estimatedCost.min} - €{issue.estimatedCost.max}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between font-medium">
            <span>Total Estimate</span>
            <span>€{totalCost.min} - €{totalCost.max}</span>
          </div>
        </div>
      </Card>

      <div className="text-center space-y-4">
        <Button>Schedule Repair</Button>
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to {formData.contactInfo.email}
        </p>
      </div>
    </div>
  );
}