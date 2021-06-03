import { createGlobalStyle } from 'styled-components';

import { theme } from '../theme';

import { boxSizing, normalise, reset } from './base';
import { images, links, page, tables } from './elements';

export const GlobalStyles = createGlobalStyle`
  ${theme}
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;
