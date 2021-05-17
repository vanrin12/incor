/* eslint-disable no-nested-ternary */
// @flow
import React, { memo } from 'react';

type Props = {
  itemObj: Object,
};

const PartnerInfo = ({ itemObj }: Props) => {
  console.log(itemObj, 'itemObj');
  const renderHashtag =
    itemObj &&
    itemObj.career &&
    itemObj.career.map((item) => <li key={item.id}>{`#${item.name}`}</li>);

  return (
    <div className="wrap-item-client">
      <div className="item-client">
        <div className="item-content d-block">
          <div className="company-name">
            <label>Tên doanh nghiệp</label>
            <h3 className="title">{itemObj?.companyName}</h3>
          </div>
          <div className="item-content p-0 mobile">
            <div className="group-left">
              <div className="location">
                <label>Trụ sở</label>
                <div className="desc"> {itemObj?.location}</div>
              </div>
              <div className="location mb-0">
                <label>Email</label>
                <div className="desc"> {itemObj?.email}</div>
              </div>
            </div>

            <div className="information mb-0 ">
              <div className="d-flex justify-content-between align-items-center">
                <div className="personnel-size">
                  <label>Quy mô nhân sự</label>
                  <div className="desc"> {itemObj?.personnelSize}</div>
                </div>
                <div className="tax-code">
                  <label>Mã số thuế</label>
                  <div className="desc"> {itemObj?.taxCode}</div>
                </div>
              </div>

              <div className="hashtag-size">
                <label>Ngành nghề</label>
                <ul>{renderHashtag}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="promotion">{`Khuyến mãi: ${itemObj?.promotion}`}</div>
      </div>
    </div>
  );
};

export default memo<Props>(PartnerInfo);
