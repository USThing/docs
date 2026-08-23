import type {ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocCard/Heading/Icon';

import styles from './styles.module.css';

/** Use a stable vector for categories instead of a platform-dependent emoji. */
export default function DocCardHeadingIcon({item, icon}: Props): ReactNode {
  return (
    <span
      aria-hidden="true"
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)}>
      {item.type === 'category' ? <FolderIcon /> : icon}
    </span>
  );
}

function FolderIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" focusable="false">
      <path
        d="M3 5.5h5.2l2 2H21v10.75A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V5.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
