import { RepairWizard } from "@/components/repair-wizard/repair-wizard";

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Get Your Repair Estimate</h1>
        <RepairWizard />
      </div>
    </div>
  );
}