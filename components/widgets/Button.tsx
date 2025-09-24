import React from "react";
import cx from "classnames";
import { Icon } from "@iconify/react";

const Button = ({
  title,
  icon = " ",
  className = "",
  variant = "darkOrange",
}: {
  title?: string;
  icon?: string;
  className?: string;
  variant?: "darkOrange" | "lightOrange";
}) => {
  const classes = cx(
    className,
    ` text-white px-8 py-3 rounded-full text-lg font-semibold transition-all flex items-center gap-2 cursor-pointer active:translate-y-1  `,
    {
      [`bg-orange hover:bg-darkOrange drop-shadow-[0px_4px_0_#FF4C3D] active:drop-shadow-[0px_2px_0_#FF6464]`]: variant === "lightOrange",
    },
    {
      [`bg-darkOrange hover:bg-orange drop-shadow-[0px_4px_0_black] active:drop-shadow-[0px_2px_0_black]`]: variant === "darkOrange",
    }
  );

  return (
    <>
      <button className={classes}>
        {title}
        {icon && <Icon icon={icon} className="size-6" />}
      </button>
    </>
  );
};

export default Button;
