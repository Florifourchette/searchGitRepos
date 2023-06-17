import React, { useEffect, useState } from 'react';
import { getOwnerDetails } from './OwnerAPICall';

export const getOwnerQualityScore = (owner_login) => {
  let owner = {};

  const owner_data_example = {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url:
      'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url:
      'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
    name: 'monalisa octocat',
    company: 'GitHub',
    blog: 'https://github.com/blog',
    location: 'San Francisco',
    email: 'octocat@github.com',
    hireable: false,
    bio: 'There once was...',
    twitter_username: 'monatheoctocat',
    public_repos: 2,
    public_gists: 1,
    followers: 20,
    following: 0,
    created_at: '2008-01-14T04:33:35Z',
    updated_at: '2008-01-14T04:33:35Z',
    private_gists: 81,
    total_private_repos: 100,
    owned_private_repos: 100,
    disk_usage: 10000,
    collaborators: 8,
    two_factor_authentication: true,
    plan: {
      name: 'Medium',
      space: 400,
      private_repos: 20,
      collaborators: 0,
    },
  };

  const test = getOwnerDetails(owner_login)
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));

  owner = {
    followers: owner_data_example.followers,
    bio: owner_data_example.bio,
    created_at: owner_data_example.created_at,
    type: owner_data_example.type,
    login: owner_data_example.login,
  };

  console.log(test);

  const today = new Date();
  const creationDate = new Date(owner.created_at);

  const followers_quality_score = owner.followers.toString().length;
  const bio_quality_score = owner.bio.length === 0 ? 0 : 1;
  const type_quality_score = owner.type === 'organization' ? 1 : 0;
  const creation_date_quality_score =
    today.getFullYear() - creationDate.getFullYear();

  return (
    followers_quality_score +
      bio_quality_score +
      type_quality_score +
      creation_date_quality_score || 0
  );
};
