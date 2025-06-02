import { type FC } from 'react';

interface IButtonProps {
    title: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({title, disabled, className, onClick}) => {
    return (
        <div>
            <button className={className} disabled={disabled} onClick={onClick}>{title}</button>
        </div>
    );
};
