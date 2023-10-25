import classNames from "classnames";

interface ButtonProps<T> {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  as?: T;
}

export const Button = <T extends React.ElementType = "button">({
  as,
  children,
  variant,
  className,
  ...props
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || "button";
  return (
    <Component
      {...props}
      className={classNames(
        "rounded-full p-2 font-normal text-sm",
        {
          "bg-[#3949AB] text-white": variant === "primary",
          "bg-transparent border-2 border-[#3949AB] text-[#3949AB]":
            variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
};
