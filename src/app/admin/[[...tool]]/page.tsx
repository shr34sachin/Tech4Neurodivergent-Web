'use client';

import { NextStudio } from 'next-sanity/studio';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

const shouldForwardProp = (propName: string, target: any) => {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
};

export default function StudioPage() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <NextStudio config={config} />
    </StyleSheetManager>
  );
}
