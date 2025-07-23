
import clsx from 'clsx';

interface ButtonProps {
    label: string;
    onClick?: () => void;
className?: string;
}

const ButtonStyles = ({label, onClick, className} : ButtonProps) => {
    return(
        <button
            onClick={onClick}
            className={clsx('cursor-pointer px-6 py-2 bg-blue-600 text-blue-600 rounded-md hover:bg-blue-700 transition', className)}
        >
            {label}
        </button>
    )
}
export default ButtonStyles;