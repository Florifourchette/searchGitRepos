import React, { useEffect, useState } from 'react';
import { getOwnerDetails } from './OwnerAPICall';

export const getOwnerQualityScore = (owner_details) => {
  const owner = owner_details[0];

  console.log(owner);

  if (owner_details !== []) {
    const today = new Date();
    const creationDate = new Date(owner?.created_at);

    const followers_quality_score = owner?.followers
      ? owner?.followers.toString().length
      : 0;

    const bio_quality_score = owner?.bio === null ? 0 : 1;
    const type_quality_score = owner?.type === 'organization' ? 1 : 0;
    const creation_date_quality_score =
      today.getFullYear() - creationDate.getFullYear()
        ? today.getFullYear() - creationDate.getFullYear()
        : 0;

    console.log(bio_quality_score);
    console.log(followers_quality_score);
    console.log(type_quality_score);
    console.log(creation_date_quality_score);
    console.log(
      followers_quality_score +
        bio_quality_score +
        type_quality_score +
        creation_date_quality_score
    );

    return (
      followers_quality_score +
      bio_quality_score +
      type_quality_score +
      creation_date_quality_score
    );
  }
};
