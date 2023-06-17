import React, { useState, useEffect, useRef } from 'react';
import { getOwnerQualityScore } from './OwnerQualityScore';
import { getRepoQualityScore } from './RepoQualityScore';

export const getQualityScore = (data) => {
  let owner_quality_score = getOwnerQualityScore(data.owner.login);
  let repo_quality_score = getRepoQualityScore(data);

  console.log(owner_quality_score);
  return Math.round((owner_quality_score + repo_quality_score) / 2);
};
