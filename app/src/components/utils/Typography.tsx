import React, { ReactNode } from 'react';
import ElementType from '../../tools/functions/ElementTypes';

function Typography(props: any) {
  const innerHTML: ReactNode = props.children;
  const element: ElementType = props.as;

  switch (element) {
    case 'div':
      break;

    default:
      break;
  }
}

export default Typography;
