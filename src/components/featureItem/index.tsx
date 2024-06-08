import React from 'react';
import Icon from "../icon";
import './featureItem.scss';

interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;
    color: string;

}

export const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, color = 'primary' }) => {
    
    return (
        <div className="feature-item">
            <div className={`feature-item__circle bg-${color}-100`} >
                <Icon 
                icon={icon} 
                color={color}
                name={icon}
                />
            </div>
            <div className="feature-item__content">
                <div className="title text-body-xs font-semibold text-center"><p className='m-0 mb-8'>{title}</p></div>
                <div className="description text-body-md text-center "><p className='m-0'>{description}</p></div>
            </div>
        </div>
    );
};

export default FeatureItem;