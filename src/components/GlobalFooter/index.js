import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <footer className={clsString}>
      {copyright && <div className={styles.copyright}>Copyright © 2018 İSFER LTD. ŞTİ.</div>}
    </footer>
  );
};

export default GlobalFooter;
