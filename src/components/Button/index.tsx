import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string
    type?: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className, type = "button" }) => {
    return (
        <button className={className} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
