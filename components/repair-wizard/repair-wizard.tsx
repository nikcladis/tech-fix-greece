"use client";

import { useState } from "react";
import { DeviceTypeStep } from "./steps/device-type-step";
import { BrandModelStep } from "./steps/brand-model-step";
import { IssuesStep } from "./steps/issues-step";
import { ContactStep } from "./steps/contact-step";
import { EstimateResult } from "./estimate-result";
import type { EstimateFormData } from "@/types/repair";

const STEPS = ["Device Type", "Brand & Model", "Issues", "Contact Info"] as const;

export function RepairWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<EstimateFormData>>({});

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const updateFormData = (data: Partial<EstimateFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {STEPS.map((step, index) => (
            <div
              key={step}
              className={`flex items-center ${
                index <= currentStep ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${index <= currentStep ? "border-primary" : "border-muted"}`}
                >
                  {index + 1}
                </div>
                <span className="text-sm mt-2">{step}</span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-0.5 w-full mx-4 ${
                    index < currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {currentStep === 0 && (
          <DeviceTypeStep
            value={formData.deviceType}
            onNext={(deviceType) => {
              updateFormData({ deviceType });
              nextStep();
            }}
          />
        )}
        {currentStep === 1 && (
          <BrandModelStep
            deviceType={formData.deviceType!}
            value={{ brand: formData.brand, model: formData.model }}
            onNext={(data) => {
              updateFormData(data);
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 2 && (
          <IssuesStep
            deviceType={formData.deviceType!}
            brand={formData.brand!}
            value={formData.issues}
            onNext={(issues) => {
              updateFormData({ issues });
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <ContactStep
            value={formData.contactInfo}
            onSubmit={(contactInfo) => {
              updateFormData({ contactInfo });
              nextStep();
            }}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && <EstimateResult formData={formData as EstimateFormData} />}
      </div>
    </div>
  );
}