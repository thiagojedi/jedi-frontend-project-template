import React, { FC } from 'react';
import HeaderText from '../../lib/components/header-text';

export const MainLayout: FC = (props) => (
  <div>
    <header>
      <HeaderText text={'Hello World'} />
    </header>
    <main>{props.children}</main>
    <footer>
      <small>Just a footer</small>
    </footer>
  </div>
);
