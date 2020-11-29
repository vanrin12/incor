// @flow
// libs
import React, { memo } from 'react';

type Props = {
  number: number,
};

export const ProgressBar = ({ number = 0 }: Props) => (
  <div className="progress-wrap">
    <div className="progress progress-striped">
      <div
        className="progress-bar"
        style={{ width: `${number}%` }}
      >{`${number}%`}</div>
    </div>
  </div>
);

export default memo<Props>(ProgressBar);
