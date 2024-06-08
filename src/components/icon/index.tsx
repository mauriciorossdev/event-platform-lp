interface IconProps {
    name?: string;
    icon: string;
    color: string;
}

export const Icon =  ({
    name = 'icon',
    icon, color = 'currentColor'
}: IconProps) => {
    const iconPath = `/icons/${icon}.svg`;

    return (
        <i
            className={`icon-${icon} icon-${color}-600 z-index-10`}
            style={{ color }}
            
        ></i>
    );
}

export default Icon;
