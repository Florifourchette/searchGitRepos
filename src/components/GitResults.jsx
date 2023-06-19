import React, { useEffect, useState } from 'react';
import { getGitData } from '../utils/RepoAPICall';
import { List, Image, Card, CardContent } from 'semantic-ui-react';
import { getQualityScore } from '../utils/qualityScore';
import { getOwnerDetails } from '../utils/OwnerAPICall';

const GitResults = ({ searchTerm, handleClick }) => {
  const [newData, setNewData] = useState([]);
  const [Repodata, setRepoData] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    getGitData(searchTerm)
      .then((data) => {
        setRepoData(data.items);
        return data.items;
      })
      .then((data) => {
        return data
          ?.map((item) => item.owner)
          ?.map((item) => item.login);
      })
      .then((data) => {
        let newArray = [];
        data?.map((item) =>
          getOwnerDetails(item).then((data) => {
            newArray.push({
              followers: data.followers,
              bio: data.bio,
              created_at: data.created_at,
              type: data.type,
              login: data.login,
            });
            setOwners(newArray);
            return newArray;
          })
        );
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  useEffect(() => {
    setNewData(
      Repodata?.map((item) => {
        return (item = {
          ...item,
          qualityScore: getQualityScore(item, owners),
        });
      })
    );
  }, [owners]);

  return (
    <>
      {newData
        ?.sort((a, b) => b.qualityScore - a.qualityScore)
        ?.map((item) => (
          <div
            className="result_card"
            key={newData.indexOf(item)}
            onClick={() => handleClick(item.owner.login)}
          >
            <img
              className="avatar"
              avatar
              src={item.owner.avatar_url}
            />
            <div className="result-card-text">
              <h3>{item.name}</h3>
              <p>Language:{item.language}</p>
              <p>qualityScore:{item.qualityScore}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default GitResults;
