import Link from "next/link";
import { useTranslations } from "next-intl";
import { FiAlertCircle } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <FiAlertCircle className="w-24 h-24 mb-4 text-error" />
      <h1 className="text-4xl font-bold mb-10">{t("title")}</h1>
      <Link href="/">
        <Button>{t("Back_to_Homepage")}</Button>
      </Link>
    </div>
  );
}
