import React, { memo } from 'react';
import { Row, Col, Card } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import router from 'umi/router';
import styles from './Analysis.less';
import uzunmamuller from '../../assets/UZUNMAMULLER1.png';
import yassimamuller from '../../assets/YASSIMAMULLER.png';
import profiller from '../../assets/PROFİLLER.png';
import dekoratifmamuller from '../../assets/DEKORATIFMAMULLER.png';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

let routeTo = (url) => {
  router.push(url)
}

const ProductsRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/uzunmamuller/insaatdemiri')}}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={uzunmamuller} />}
      >
        <Meta
          title={<FormattedMessage id="long_products" />}
          description={formatMessage({ id: 'long_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/yassimamuller/shr')}}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={yassimamuller} />}
      >
        <Meta
          title={<FormattedMessage id="flat_products" />}
          description={formatMessage({ id: 'flat_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('/products/profiller/kdkp')}}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={dekoratifmamuller} />}
      >
        <Meta
          title={<FormattedMessage id="decorative_products" />}
          description={formatMessage({ id: 'decorative_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps} style={{cursor: 'pointer'}} onClick={()=> {routeTo('')}}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={profiller} />}
      >
        <Meta
          title={<FormattedMessage id="profile_products" />}
          description={formatMessage({ id: 'profile_products_index' })}
        />
      </Card>
    </Col>
  </Row>
));

export default ProductsRow;
