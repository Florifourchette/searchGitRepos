import React from 'react';
import { getOwnerQualityScore } from './OwnerQualityScore';
import { getRepoQualityScore } from './RepoQualityScore';

export const getQualityScore = (data, owners) => {
  console.log(data.owner.login);
  let repo_quality_score = getRepoQualityScore(data);
  let owner_quality_score = getOwnerQualityScore(
    owners.filter((owner) => owner.login === data.owner.login)
  );
  owners = [];
  return Math.round((owner_quality_score + repo_quality_score) / 2);
};
