import React from 'react';

export interface Route {
  title: string;
  element: React.ReactNode;
  exact?: boolean;
  path: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
