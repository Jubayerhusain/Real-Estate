import React, { useEffect, useState } from "react";
import Card from "../Shared/Card";
import SharedCard from "../Shared/ShardCard";

const CommercialProperty = () => {
  const [featureds, setfeatureds] = useState([]);
  useEffect(() => {
    fetch("/commertial-property.json")
      .then((res) => res.json())
      .then((data) => setfeatureds(data));
  }, []);
  console.log("this is a:", featureds);
  return (
    <div className="sm:my-12">
      <div className=" text-center space-y-2 mb-10">
        <h1 className="text-4xl font-bold">Commercial property</h1>
        <p>
          Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
        </p>
      </div>
      <SharedCard featureds={featureds} />
    </div>
  );
};

export default CommercialProperty;
