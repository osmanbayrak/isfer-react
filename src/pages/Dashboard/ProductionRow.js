import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
import uzunmamuller from '../../assets/uzunmamuller.jpg';
import yassimamuller from '../../assets/yassimamuller.jpg';
import profiller from '../../assets/profiller.png';
import dekoratifmamuller from '../../assets/dekoratifmamuller.jpg';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

const ProductionRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={uzunmamuller} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 1" />}
          description={formatMessage({ id: 'long_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={yassimamuller} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 2" />}
          description={formatMessage({ id: 'flat_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={dekoratifmamuller} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 3" />}
          description={formatMessage({ id: 'decorative_products_index' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={profiller} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 4" />}
          description={formatMessage({ id: 'profile_products_index' })}
        />
      </Card>
    </Col>
  </Row>
));

export default ProductionRow;
