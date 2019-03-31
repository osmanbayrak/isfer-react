import React, { PureComponent } from 'react';
import Link from 'umi/link';
import RightContent from '../GlobalHeader/RightContent';
import BaseMenu from '../SiderMenu/BaseMenu';
import { getFlatMenuKeys } from '../SiderMenu/SiderMenuUtils';
import styles from './index.less';
import { title } from '../../defaultSettings';
import withScroll from './scrollDetector';


@withScroll
export default class TopNavHeader extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      maxWidth: (props.contentWidth === 'Fixed' ? 1400 : window.innerWidth) - 280 - 165 - 40,
    };
  }

  render() {
    let opacityColor = 'transparent'
    if (this.props.scrollPosition > 110) {
      opacityColor = 'rgba(2, 26, 51, 1)'
    }
    const { theme, contentWidth, menuData, logo } = this.props;
    const { maxWidth } = this.state;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return (
      <div style={{backgroundColor: opacityColor}} className={`${styles.head} ${theme === 'light' ? styles.light : ''}`}>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        <div
          ref={ref => {
            this.maim = ref;
          }}
          className={`${styles.main} ${contentWidth === 'Fixed' ? styles.wide : ''}`}
        >
          <div className={styles.left}>
            <div className={styles.logo} key="logo" id="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div
              style={{
                maxWidth,
              }}
            >
              <BaseMenu style={{fontWeight: '200', fontFamily: 'Montserrat', fontSize: '10px', color: 'white'}} {...this.props} flatMenuKeys={flatMenuKeys} className={styles.menu} />
            </div>
          </div>
          <RightContent {...this.props} />
        </div>
      </div>
    );
  }
}
