import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
import production1 from '../../assets/production1.png';
import production2 from '../../assets/production2.png';
import production3 from '../../assets/production3.png';
import production4 from '../../assets/production4.png';

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
        cover={<img className={styles.rowImages} alt="example" src={production1} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 1" />}
          description={formatMessage({ id: 'production_description1' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production2} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 2" />}
          description={formatMessage({ id: 'production_description2' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production3} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 3" />}
          description={formatMessage({ id: 'production_description3' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={production4} />}
      >
        <Meta
          title={<FormattedMessage id="Üretim Örnek 4" />}
          description={formatMessage({ id: 'production_description4' })}
        />
      </Card>
    </Col>
  </Row>
));

export default ProductionRow;
