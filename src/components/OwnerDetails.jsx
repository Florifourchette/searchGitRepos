import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const OwnerDetails = ({ ownerDetails }) => {
  return (
    <div className="owner_card_details">
      <Card>
        <Image
          className="owner_avatar"
          src={ownerDetails.avatar_url}
          ui={false}
        />
        Hello
        <Card.Content className="owner_card_content_container">
          <Card.Header>
            {ownerDetails.login
              ? ownerDetails.login
              : 'not mentioned'}
          </Card.Header>
          <Card.Meta>
            {ownerDetails.followers
              ? ownerDetails.followers
              : 'not mentioned'}
          </Card.Meta>
          {ownerDetails.bio === null ? (
            <></>
          ) : (
            <Card.Description>{ownerDetails.bio}</Card.Description>
          )}
        </Card.Content>
      </Card>
    </div>
  );
};

export default OwnerDetails;
