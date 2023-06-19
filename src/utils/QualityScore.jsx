import React from 'react';
import { getOwnerQualityScore } from './OwnerQualityScore';
import { getRepoQualityScore } from './RepoQualityScore';

export const getQualityScore = (data, owner) => {
  let repo_quality_score = getRepoQualityScore(data);
  let owner_quality_score = getOwnerQualityScore(
    owner.filter((owner) => owner.login === data.owner.login)
  );
  owner = [];
  return Math.round((owner_quality_score + repo_quality_score) / 2);
};
