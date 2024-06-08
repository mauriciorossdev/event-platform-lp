

import './bubble.scss';
interface BubbleProps {
   index: number;
   integration: {
      name: string;
      logo: string;
   };
}



export const Bubble = ({
   index,
   integration
}: BubbleProps
) => {
   return (<div className='bubble'>
      <img key={index} src={`/logos/${integration.logo}.svg`} alt={integration.name} />
   </div>
   )
}

export default Bubble;