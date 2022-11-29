import React, { useEffect, useState } from 'react';
import { Checkbox } from '@alicloud/console-components';
import { ActivityTypes } from './constants';
import { i18n } from '../utils';
import { isEmpty, size, map } from 'lodash';

const { Group: CheckboxGroup } = Checkbox;

const ActivityType = (props) => {
  const { onChange, value } = props;
  const [dataSource, setDataSource] = useState(ActivityTypes);
  useEffect(() => {
    if (isEmpty(value)) {
      onChange(['merged']);
      return;
    }
    const newData = map(dataSource, (item) => {
      item.disabled = size(value) === 1 ? item.value === value[0] : false;
      return item;
    });
    setDataSource(newData);
  }, [value]);

  return (
    <div style={{ padding: '16px 0 0 50px', display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: 16 }}>{i18n('ui.trigger.activity.type')}</span>
      <CheckboxGroup value={value} dataSource={dataSource} onChange={onChange} />
    </div>
  );
};

export default ActivityType;