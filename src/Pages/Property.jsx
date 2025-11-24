import React, { useEffect, useState } from 'react'
import PropertyHero from './../Components/PropertyHero';
import SharedCard from './../Components/Shared/ShardCard';

const Property = () => {

      const [featureds, setfeatureds] = useState([]);
      useEffect(() => {
        fetch("/all-property.json")
          .then((res) => res.json())
          .then((data) => setfeatureds(data));
      }, []);

    return (
        <div className="max-w-[1440px] mx-auto">
            <PropertyHero />
            <SharedCard featureds={featureds} />
        </div>
    )
}

export default Property