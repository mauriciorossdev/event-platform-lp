import React from 'react';
import Icon from "../icon";
import './featureIcon.scss';

interface FeatureIconProps {
    icon: string;

    color: string;

}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ icon, color = 'primary' }) => {
    
    return (
        <div className="feature-icon">
            <div className={`feature-icon__circle bg-${color}-100`} >
                <Icon 
                icon={icon} 
                color={color}
                name={icon}
                />
            </div>
            
        </div>
    );
};

export default FeatureIcon;