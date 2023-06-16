import React, { useEffect, useState } from 'react';
import { getGitData } from '../utils/RepoAPICall';
import { List, Image, Card } from 'semantic-ui-react';
import '../styles/stylesheet.css';

const GitResults = ({ searchTerm }) => {
  const [data, setData] = useState([]);

  console.log(searchTerm);

  useEffect(() => {
    console.log(searchTerm);
    getGitData(searchTerm).then((data) => setData(data.items));
  }, [searchTerm]);

  console.log(data);

  return (
    <>
      <List>
        {data?.map((item) => (
          <List.Item className="result_card" key={data.indexOf(item)}>
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
    </>
  );
};

export default GitResults;
