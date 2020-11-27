// @flow
// libs
import React, { memo } from 'react';
import LoadingSmall from '../Loading/LoadingSmall';

type Props = {
  onClick: Function,
  isDisabled?: any,
  customClass?: string,
  children: any,
  type?: string,
  isShowLoading?: boolean,
};

const Button = ({
  isDisabled = false,
  onClick,
  customClass = '',
  children,
  type,
  isShowLoading = false,
}: Props) => {
  return (
    <div className="btn-wrap">
      <button
        type={type}
        className={`button btn btn-primary ${customClass}`}
        disabled={isDisabled}
        onClick={onClick}
      >
        {children}
      </button>
      {isShowLoading && <LoadingSmall />}
    </div>
  );
};

Button.defaultProps = {
  isDisabled: false,
  customClass: '',
  type: 'submit',
  isShowLoading: false,
};

export default memo<Props>(Button);
