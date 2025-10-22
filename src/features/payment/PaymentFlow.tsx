"use client";
import React, { useState, useEffect } from "react";
import BookingSummary from "./BookingSummary";
import PaymentMethodSelection from "./PaymentMethodSelection";
import PaymentDetails from "./PaymentDetails";
import ConfirmationSuccess from "./ConfirmationSuccess";
import { PaymentStep } from "./types";
import { useTranslations } from "next-intl";
import { useBookingStore } from "@/features/booking/store/booking-store";

const PaymentFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<PaymentStep>("summary");
  const t = useTranslations();
  const { reset } = useBookingStore();

  useEffect(() => {
    if (currentStep === "confirmation") {
      reset();
    }
  }, [currentStep, reset]);

  const handleNext = () => {
    switch (currentStep) {
      case "summary":
        setCurrentStep("payment_method");
        break;
      case "payment_method":
        setCurrentStep("payment_details");
        break;
      case "payment_details":
        setCurrentStep("confirmation");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "payment_method":
        setCurrentStep("summary");
        break;
      case "payment_details":
        setCurrentStep("payment_method");
        break;
      default:
        break;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "summary":
        return <BookingSummary onNext={handleNext} t={t} />;
      case "payment_method":
        return (
          <PaymentMethodSelection
            onNext={handleNext}
            onBack={handleBack}
            t={t}
          />
        );
      case "payment_details":
        return <PaymentDetails onNext={handleNext} onBack={handleBack} t={t} />;
      case "confirmation":
        return <ConfirmationSuccess t={t} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">{renderStep()}</div>
    </div>
  );
};

export default PaymentFlow;
