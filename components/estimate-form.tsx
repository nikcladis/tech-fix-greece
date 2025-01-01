"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function EstimateForm() {
  const t = useTranslations("estimate");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [estimate, setEstimate] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstimate("€50");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      <div className="mb-4">
        <label
          htmlFor="device"
          className="block text-sm font-medium text-gray-700"
        >
          {t("device")}
        </label>
        <input
          type="text"
          id="device"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder={t("devicePlaceholder")}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="issue"
          className="block text-sm font-medium text-gray-700"
        >
          {t("issue")}
        </label>
        <textarea
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          placeholder={t("issuePlaceholder")}
        ></textarea>
      </div>
      <Button type="submit" className="w-full">
        {t("submit")}
      </Button>
      {estimate && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          {t("estimatedCost")} {estimate}
        </div>
      )}
    </form>
  );
}
