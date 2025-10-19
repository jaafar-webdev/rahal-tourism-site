"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <FiAlertCircle className="w-24 h-24 mb-4 text-error" />
      <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
      <p className="text-lg">{t("message")}</p>
    </div>
  );
}
