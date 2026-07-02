import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn("mx-auto w-full max-w-container px-6 sm:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
