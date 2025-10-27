type CopyrightSectionProps = {
  brandText: string;
  rightsReservedText: string;
  designedWithLoveText: string;
};

export const CopyrightSection = ({
  brandText,
  rightsReservedText,
  designedWithLoveText,
}: CopyrightSectionProps) => {
  return (
    <div className="text-center border-t border-gray-800 pt-6 w-full">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {brandText}. {rightsReservedText}
      </p>
      <p className="text-gray-500 text-xs mt-2">{designedWithLoveText}</p>
    </div>
  );
};
