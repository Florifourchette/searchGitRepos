import React from 'react';
import '../styles/stylesheet.css';
import '../styles/tabletStyleSheet.css';
import { useState } from 'react';
import GitResults from '../components/GitResults';
import Searchbar from '../components/Searchbar';
import { getOwnerDetails } from '../utils/OwnerAPICall';
import OwnerDetails from '../components/OwnerDetails';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ownerDetails, setOwnerDetails] = useState('');
  const [repoClicked, setRepoClicked] = useState(false);

  const handleClick = (ownerDetails) => {
    setRepoClicked(true);
    getOwnerDetails(ownerDetails).then((data) =>
      setOwnerDetails(data)
    );
  };

  return (
    <>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setRepoClicked={setRepoClicked}
      />
      <div
        className={
          repoClicked
            ? 'github_result_container_clicked'
            : 'github_result_container'
        }
      >
        <OwnerDetails
          ownerDetails={ownerDetails}
          repoClicked={repoClicked}
        />
        <GitResults
          className="GitResults"
          searchTerm={searchTerm}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default Homepage;
