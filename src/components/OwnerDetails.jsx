import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const OwnerDetails = ({ ownerDetails, repoClicked }) => {
  if (repoClicked) {
    return (
      <>
        {ownerDetails ? (
          <>
            <Card className="owner_card_details">
              <Image
                className="owner_avatar"
                src={ownerDetails.avatar_url}
                ui={false}
              />
              <Card.Content className="owner_card_content_container">
                <Card.Header>{ownerDetails.login}</Card.Header>
                <Card.Meta>
                  Followers: {ownerDetails.followers}
                </Card.Meta>{' '}
                {ownerDetails.bio === null ? (
                  <></>
                ) : (
                  <Card.Description>
                    Bio: {ownerDetails.bio}
                  </Card.Description>
                )}
              </Card.Content>
            </Card>
          </>
        ) : (
          <Card className="owner_card_details">
            <Image
              className="owner_avatar"
              src="../../public/assets/user-logo.png"
              ui={false}
            />
            <Card.Content className="owner_card_content_container">
              <Card.Header>{ownerDetails.login}</Card.Header>
              <Card.Meta>Followers: No info available</Card.Meta>{' '}
              <Card.Description>
                Bio: No info available
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </>
    );
  }
};

export default OwnerDetails;
