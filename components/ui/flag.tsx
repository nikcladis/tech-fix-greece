import Image from "next/image";

interface FlagProps {
  code: string;
  className?: string;
}

export function Flag({ code, className }: FlagProps) {
  return (
    <Image
      src={`https://flagcdn.com/${code}.svg`}
      alt={`${code} flag`}
      width={20}
      height={20}
      className={className || "rounded-sm object-cover"}
    />
  );
}
