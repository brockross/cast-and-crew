import React from 'react';
import styled from 'styled-components';


const PhotoWrapper = styled.div`
  position: relative;
  display: block;
  height: 189px;
  width: 126px;
  overflow: hidden;
`;

const ActorPhotoStyles = styled.img`
  position: relative;
  display: block;
  height: 189px;
  width: 126px;
  overflow: hidden;
  opacity: 1;
  transition: opacity .25s, transform .25s ease;
  :hover {
    transform: scale(1.09);
    opacity: 0.7;
    cursor: pointer;
`;

class ActorPhoto extends React.Component {
  constructor(props) {
    super(props);

  }

  onClick() {
    // ADD ONCLICK METHOD THAT CREATES POP-UP WITH BIO AND FILMOGRAPHY
    console.log('map out a list of the names and roles of the cast members');
  }

  render() {
    return (
      <PhotoWrapper>
        <ActorPhotoStyles src={this.props.actor.photo} onClick={this.onClick}/>
      </PhotoWrapper>
    );
  }
}

export default ActorPhoto;