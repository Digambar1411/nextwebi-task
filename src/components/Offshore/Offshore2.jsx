import './Offshore2.css';
import './Offshore1.css';
import { cardsData } from '../../Data/offshoreCards';

const OffshoreDevelopment2 = () => {
  return (
    <div className="offshore-wrapper">
      <div className="offshore-container2">
        <h2 className="offshore-heading">
          Output-Driven Offshore Software Development Centre
        </h2>
        <p className='offshore-sub-text'>
        Offshore development services refers to the practice of hiring a remote team or a software development company in a different company to help reduce development costs
        </p>
        <div className="offshore-card-container">
          {
            cardsData.map(card=>(
              <div className='offshore-card'>
              <h2 className='offshore-card-heading'>{card.title}</h2>
              <p className='offshore-card-text'>{card.text}</p>
            </div>
            ))
          }
          {
            cardsData.map(card=>(
              <div className='offshore-card'>
              <h2 className='offshore-card-heading'>{card.title}</h2>
              <p className='offshore-card-text'>{card.text}</p>
            </div>
            ))
          }
        </div>
      </div>

    </div>
  
  );
};

export default OffshoreDevelopment2;