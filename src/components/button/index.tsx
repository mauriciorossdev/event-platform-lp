import './button.scss'

interface ButtonProps {
    text: string,
    size: 'md' | 'lg',
    onClick: () => void
}

export const Button = ({ text = 'Button', size = 'md', onClick }: ButtonProps) => {
    return (
        <button className={`button button${'-'+size}`}>{text}</button>
    )
}

export default Button;