import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { FormattedMessage, formatMessage } from 'umi/locale';
import styles from './Analysis.less';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
import faaliyet1 from '../../assets/faaliyet1.png';
import faaliyet2 from '../../assets/faaliyet2.png';
import faaliyet3 from '../../assets/faaliyet3.png';
import faaliyet4 from '../../assets/faaliyet4.png';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  style: { marginBottom: 24 },
};
const { Meta } = Card;

const ActivitiesRow = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet1} />}
      >
        <Meta
          title={<FormattedMessage id="Faaliyet Örnek 1" />}
          description={formatMessage({ id: 'faaliyet1_description' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet2} />}
      >
        <Meta
          title={<FormattedMessage id="Faaliyet Örnek 2" />}
          description={formatMessage({ id: 'faaliyet2_description' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet3} />}
      >
        <Meta
          title={<FormattedMessage id="Faaliyet Örnek 3" />}
          description={formatMessage({ id: 'faaliyet3_description' })}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        style={{ overflow: 'hidden' }}
        cover={<img className={styles.rowImages} alt="example" src={faaliyet4} />}
      >
        <Meta
          title={<FormattedMessage id="Faaliyet Örnek 4" />}
          description={formatMessage({ id: 'faaliyet4_description' })}
        />
      </Card>
    </Col>
  </Row>
));

export default ActivitiesRow;
