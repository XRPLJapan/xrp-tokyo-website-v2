import { cn } from "@/lib/utils";
import { BRAND_STYLES } from "@/lib/styles/common";

type HubImageFrameProps = {
  aspect: string;
  className?: string;
  children: React.ReactNode;
};

export function HubImageFrame({
  aspect,
  className,
  children,
}: HubImageFrameProps) {
  return (
    <div className={cn("relative", BRAND_STYLES.hubImageFrame, aspect, className)}>
      {children}
    </div>
  );
}
