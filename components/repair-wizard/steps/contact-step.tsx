"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EstimateFormData } from "@/types/repair";

interface ContactStepProps {
  value?: EstimateFormData["contactInfo"];
  onSubmit: (data: EstimateFormData["contactInfo"]) => void;
  onBack: () => void;
}

export function ContactStep({ value, onSubmit, onBack }: ContactStepProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: value || {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Your Contact Information</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            {...register("phone", { required: "Phone is required" })}
            placeholder="+30 123 456 7890"
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            {...register("location", { required: "Location is required" })}
            placeholder="Athens, Greece"
          />
          {errors.location && (
            <p className="text-sm text-destructive mt-1">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">
          Get Estimate
        </Button>
      </div>
    </form>
  );
}