import React from 'react';
import '../styles/stylesheet.css';
import { useState } from 'react';
import GitResults from '../components/GitResults';
import Searchbar from '../components/Searchbar';
import { getOwnerDetails } from '../utils/OwnerAPICall';
import OwnerDetails from '../components/OwnerDetails';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ownerDetails, setOwnerDetails] = useState('');

  const handleClick = (ownerDetails) => {
    getOwnerDetails(ownerDetails).then((data) =>
      setOwnerDetails(data)
    );
  };

  return (
    <div>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="Github_Result_Container">
        <GitResults
          className="GitResults"
          searchTerm={searchTerm}
          handleClick={handleClick}
        />
        <OwnerDetails ownerDetails={ownerDetails} />
      </div>
    </div>
  );
};

export default Homepage;
