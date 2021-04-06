import React from 'react';
import { PreviewLayout } from '../interfaces';
import { Alert } from './alert';
import { Footer } from './footer';
import { Meta } from './meta';

export const Layout: React.FC<PreviewLayout> = ({ preview, children }) => (
  <>
    <Meta />
    <div>
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);
