"use client";

import { DeviceType, BrandType, RepairIssue } from "@/types/repair";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { commonIssues } from "@/lib/repair-data";
import { Card } from "@/components/ui/card";

interface IssuesStepProps {
  deviceType: DeviceType;
  brand: BrandType;
  value?: string[];
  onNext: (issues: string[]) => void;
  onBack: () => void;
}

export function IssuesStep({ deviceType, value = [], onNext, onBack }: IssuesStepProps) {
  const issues = commonIssues[deviceType];
  const selectedIssues = new Set(value);

  const toggleIssue = (issueId: string) => {
    const newSelection = new Set(selectedIssues);
    if (newSelection.has(issueId)) {
      newSelection.delete(issueId);
    } else {
      newSelection.add(issueId);
    }
    return Array.from(newSelection);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">What issues need repair?</h2>
      
      <div className="space-y-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="p-4">
            <div className="flex items-start space-x-4">
              <Checkbox
                id={issue.id}
                checked={selectedIssues.has(issue.id)}
                onCheckedChange={() => onNext(toggleIssue(issue.id))}
              />
              <div className="space-y-1">
                <Label htmlFor={issue.id} className="text-lg font-medium">
                  {issue.name}
                </Label>
                <p className="text-sm text-muted-foreground">{issue.description}</p>
                <p className="text-sm">
                  Estimated cost: €{issue.estimatedCost.min} - €{issue.estimatedCost.max}
                </p>
                <p className="text-sm">Estimated time: {issue.estimatedTime}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={() => onNext(Array.from(selectedIssues))}
          disabled={selectedIssues.size === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
}