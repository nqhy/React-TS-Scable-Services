import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

import Thumbnail from './Thumbnail';
import { ImageAttributes } from '../types';

const GalleryWrapper = styled.div`
  display: flex;
  flex: 1;
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
    return data.map((value, index) => {
      return <Thumbnail src={value.url} key={index} />;
    });
  }, [data]);

  return <GalleryWrapper>{displayThumbNail()}</GalleryWrapper>;
};

export default Gallery;
