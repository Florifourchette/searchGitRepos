import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const OwnerDetails = ({ ownerDetails }) => {
  console.log(ownerDetails);
  return (
    <div className="owner_Card_Container">
      <Card>
        <Image
          className="owner_avatar"
          src={ownerDetails.avatar_url}
          ui={false}
        />
        <Card.Content className="owner_card_content_container">
          <Card.Header>{ownerDetails.login}</Card.Header>
          <Card.Meta>{ownerDetails.followers}</Card.Meta>
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
