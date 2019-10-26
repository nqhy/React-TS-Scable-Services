import React from 'react';
import styled, { css } from 'styled-components';

import { stageImage } from '../types';
import { heartIcon } from '../../../styles/images';

import { heightScreen } from '../../../utils/dimension';

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-basis: calc(100% / 4);
  flex-shrink: 0;
  height: ${(heightScreen * 30) / 100}px;
  @media (max-width: 1200px) {
    flex-basis: calc(100% / 3);
  }
  @media (max-width: 850px) {
    flex-basis: calc(100% / 2);
  }
  @media (max-width: 550px) {
    flex-basis: calc(100% / 1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
`;

const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 2%;
  padding-bottom: 2%;
  cursor: pointer;
  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
      background-size: 100% 100%;
    `}
`;

const IconFavourite = styled.div<{ src: any; stage: stageImage }>`
  width: 40px;
  height: 40px;
  opacity: 0;
  ${Image}:hover & {
    ${({ stage, src }) =>
      stage !== 'favourite' &&
      css`
        opacity: 0.7;
        background-image: url(${src});
      `}
  }
  ${({ src, stage }) =>
    stage === 'favourite' &&
    css`
      opacity: 1;
      background-image: url(${src});
      background-size: 100% 100%;
    `};
`;

interface ThumbnailProps {
  onSelect?: Function;
  stage?: stageImage;
  src: string;
}

const Thumbnail: React.SFC<ThumbnailProps> = (props: ThumbnailProps) => {
  const { src } = props;
  return (
    <ThumbnailWrapper>
      <ImageWrapper>
        <Image src={src}>
          <IconFavourite stage={'default'} src={heartIcon} />
        </Image>
      </ImageWrapper>
    </ThumbnailWrapper>
  );
};

export default Thumbnail;
