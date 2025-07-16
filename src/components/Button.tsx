import type { ReactElement } from "react";

// type Variants = "primary" | "secondary";

interface buttonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-white"
}

const sizeStyles = {
    "sm": "px-2 py-1 text-sm",
    "md": "px-4 py-1 text-md",
    "lg": "px-6 py-2 text-4xl",
}

const defaultStyles = "rounded-md flex items-center w-40 flex-wrap h-10 align-center leading-3"

export const Button = (props: buttonProps) => {
    return <button onClick={props.onClick} className={`  ${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}`}>
        {props.startIcon ? <div className="p-1">{props.startIcon}</div> : null}  {props.text}</button>
}

{/* <Button variant="primary" size="lg" text="Add"  onClick={() => { }} /> */ }