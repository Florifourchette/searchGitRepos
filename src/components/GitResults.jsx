import React, { useEffect, useState } from 'react';
import { getGitData } from '../utils/RepoAPICall';
import { List, Image, Card, CardContent } from 'semantic-ui-react';
import { getQualityScore } from '../utils/qualityScore';

const GitResults = ({ searchTerm, handleClick }) => {
  const [data, setData] = useState([]);
  // const [qualityScore, setqualityScore] = useState([]);

  useEffect(() => {
    getGitData(searchTerm)
      .then((data) =>
        setData(
          data.items?.map(
            (item) =>
              (item = {
                ...item,
                qualityScore: getQualityScore(item),
              })
          )
        )
      )
      .catch((error) => console.log(error));
  }, [searchTerm]);

  console.log(data);

  return (
    <div className="Search_Result_Container">
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
              <p>Language:{item.language}</p>
              <p>qualityScore:{item.qualityScore}</p>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default GitResults;
