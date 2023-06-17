import React from 'react';

export const getRepoQualityScore = (data) => {
  const repoData = {
    stargazer: data.stargazers_count,
    last_update: data.updated_at,
    topics: data.topics,
    watchers: data.watchers,
    forks: data.fork,
    open_issues: data.open_issues,
  };

  const today = new Date();
  const updateDate = new Date(repoData.last_update);

  const stargazer_quality_score =
    repoData.stargazer.toString().length;
  const watchers_quality_score = repoData.watchers.toString().length;
  const update_quality_score =
    today.getFullYear() -
    updateDate.getFullYear() +
    today.getMonth() -
    updateDate.getMonth();
  const topics_quality_score = repoData.topics.length;
  const forks_quality_score = repoData.forks / 5;
  const open_issues_quality_score = repoData.open_issues / 5;

  return (
    stargazer_quality_score +
    watchers_quality_score -
    update_quality_score +
    topics_quality_score +
    forks_quality_score +
    open_issues_quality_score
  );
};
