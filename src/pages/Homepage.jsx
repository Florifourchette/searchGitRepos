import React from 'react';
import { useState } from 'react';
import GitResults from '../components/GitResults';
import Searchbar from '../components/Searchbar';

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <GitResults searchTerm={searchTerm} />
    </div>
  );
};

export default Homepage;
