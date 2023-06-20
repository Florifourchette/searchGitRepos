import React, { useEffect, useState } from 'react';
import { getGitData } from '../utils/RepoAPICall';
import { getOwnerDetails } from '../utils/OwnerAPICall';
import { getOwnerQualityScore } from '../utils/OwnerQualityScore';
import { getRepoQualityScore } from '../utils/RepoQualityScore';

const GitResults = ({ searchTerm, handleClick }) => {
  const [newData, setNewData] = useState([]);
  const [Repodata, setRepoData] = useState([]);
  const [owners, setOwners] = useState([]);
  let [onwerQualityScore, setOwnerQualityScore] = useState([]);

  useEffect(() => {
    getGitData(searchTerm)
      .then((data) => {
        setRepoData(data.items);
        return data.items;
      })
      //use the repo data in order to get an array with only the repos owners. The array will then be used to make an API call to get the users'details
      .then((data) => {
        return data
          ?.map((item) => item.owner)
          ?.map((item) => item.login);
      })
      .then((data) => {
        return data?.map((item) =>
          getOwnerDetails(item)
            .then((data) => {
              return setOwners([
                ...owners,
                {
                  followers: data.followers,
                  bio: data.bio,
                  created_at: data.created_at,
                  type: data.type,
                  login: data.login,
                },
              ]);
            })
            .catch((error) => console.log(error))
        );
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  useEffect(() => {
    getOwnerQualityScore(owners, onwerQualityScore);
    //All the data has been pushed into onwerQualityScore so the 'irrelevant'data should be filterred out in order to keep the valid data
    onwerQualityScore = onwerQualityScore.filter(
      (item) => item.owner_login !== undefined
    );
    setNewData(
      Repodata?.map((item) => {
        const RepoQS = getRepoQualityScore(item);
        const ownerfiltered = onwerQualityScore?.filter(
          (QS) => QS.owner_login === item.owner.login
        );
        return (item = {
          ...item,
          //if the owner quality score does not come then take the repo quality score only
          quality_score: Math.round(
            (ownerfiltered[0]?.ownerQualityScore + RepoQS) / 2 ||
              RepoQS
          ),
        });
      })
    );
  }, [owners]);

  return (
    <>
      {newData
        ?.sort((a, b) => b.quality_score - a.quality_score)
        ?.map((item) => (
          <div
            className="result_card"
            key={newData.indexOf(item)}
            onClick={() => handleClick(item.owner.login)}
          >
            <img className="avatar" src={item.owner.avatar_url} />
            <div className="result-card-text">
              <h3>{item.name}</h3>
              {item.language ? (
                <p>Language: {item.language}</p>
              ) : (
                <></>
              )}
              <p>qualityScore: {item.quality_score}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default GitResults;
