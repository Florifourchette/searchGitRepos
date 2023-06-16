import React, { useEffect, useState } from 'react';
import { getGitData } from '../utils/RepoAPICall';
import { List, Image, Card, CardContent } from 'semantic-ui-react';

const GitResults = ({ searchTerm, handleClick }) => {
  const [data, setData] = useState([]);

  console.log(searchTerm);

  useEffect(() => {
    console.log(searchTerm);
    getGitData(searchTerm)
      .then((data) => setData(data.items))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  console.log(data);

  return (
    <div classname="Search_Result_Container">
      <List>
        {data?.map((item) => (
          <List.Item
            className="result_card"
            key={data.indexOf(item)}
            onClick={() => handleClick(item.owner.login)}
          >
            <Image
              className="avatar"
              avatar
              src={item.owner.avatar_url}
            />
            <List.Content>
              <List.Header>{item.name}</List.Header>
              Language:{item.language}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default GitResults;
