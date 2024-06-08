import './button.scss'

interface ButtonProps {
    text: string,
    size: 'md' | 'lg',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ text = 'Button', size = 'md', onClick }: ButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    }
    return (
        <button className={`button button${'-'+size}`} onClick={(e)=>handleClick(e)}>{text}</button>
    )
}

export default Button;