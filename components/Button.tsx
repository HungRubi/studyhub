import { FC } from "react";

type ButtonProps = {
    className?: string;
    text?: string;
    icons?: React.ReactNode;
};


const Button: FC<ButtonProps> =  ({icons, text, className}) => {
    return (
        <button className={`mt-6 px-6 py-3 shadow bg-white text-[#ff7b00] font-semibold rounded-2xl hover:bg-gray-100 transition flex items-center gap-2.5 justify-center ${className}`}>
            {text}
            {icons}
        </button>
    )
}

export default Button;