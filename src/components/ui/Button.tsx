import React, { ButtonHTMLAttributes } from "react";
import "../../styles/globals.css";

import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  link: string;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({variant = "primary", children, ...props }) => {
  const className = variant === "primary" ? "btn btn-primary cta-btn" : "btn btn-secondary cta-btn";

  return (
    <Link className={className} {...props}>
      <div className="btn-text-wrapper">
        <p className="btn-text">{children}</p>
        <p className="btn-text">{children}</p>
      </div>
    </Link>
  );
};

export default Button;
