'use client';

import { NextStudio } from 'next-sanity/studio';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import config from '../../../../sanity.config';

export default function StudioPage() {
  return (
    <StyleSheetManager
      shouldForwardProp={(propName, target) => {
        if (typeof target === 'string') {
          return isPropValid(propName);
        }
        return true;
      }}
    >
      <NextStudio config={config} />
    </StyleSheetManager>
  );
}
