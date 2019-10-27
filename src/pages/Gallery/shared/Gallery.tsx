import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

import Thumbnail from './Thumbnail';
import { ImageAttributes } from '../types';
import { heightScreen } from '../../../utils/dimension';

const GalleryWrapper = styled.div`
  display: flex;
  flex: 1;
  max-height: ${(heightScreen * 65) / 100}px;
  overflow: scroll;
  flex-flow: wrap;
  padding-left: 5%;
  padding-right: 5%;
`;

interface GalleryProps {
  data: Array<ImageAttributes>;
}

const Gallery: React.SFC<GalleryProps> = (props: GalleryProps) => {
  const { data } = props;
  const displayThumbNail = useCallback(() => {
    return data.map((value: ImageAttributes) => {
      return <Thumbnail data={value} key={value.id} />;
    });
  }, [data]);

  return <GalleryWrapper>{displayThumbNail()}</GalleryWrapper>;
};

export default Gallery;
