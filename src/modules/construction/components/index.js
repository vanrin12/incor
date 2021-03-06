/* eslint-disable no-nested-ternary */
// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'commons/components/MainLayout';
import { getListProject } from 'modules/partner/redux';
import Loading from 'commons/components/Loading';
import Button from 'commons/components/Button';
import ROUTERS from 'constants/router';

type Props = {
  history: {
    push: Function,
  },
};

const ConstructionManager = ({ history }: Props) => {
  const dispatch = useDispatch();
  const { dataListProject, isProcessingProject } = useSelector(
    (state) => state?.partner
  );
  const COLUMNS = [
    {
      id: 1,
      label: 'STT',
      width: 10,
    },
    {
      id: 2,
      label: 'Tên dự án',
      width: 30,
    },
    {
      id: 3,
      label: 'Khu vực',
      width: 40,
    },
    {
      id: 4,
      label: 'Xem chi tiết',
      width: 20,
    },
  ];

  useEffect(() => {
    dispatch(getListProject());
    // eslint-disable-next-line
  }, []);

  return (
    <MainLayout headTitle="Quản lý tiến độ công trình">
      <div className="page-construction pt-page m-auto h-80vh">
        {isProcessingProject ? (
          <Loading />
        ) : (
          <>
            <h2 className="page-title mb-5">QUẢN LÝ TIẾN ĐỘ CÔNG TRÌNH</h2>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    {COLUMNS.map((column) => (
                      <th key={column.id} style={{ width: `${column.width}%` }}>
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataListProject &&
                    dataListProject.map((data, index) => (
                      <tr
                        key={data.id}
                        onClick={() =>
                          history.push(
                            `${ROUTERS.PAGE_CONSTRUCTION}/${data.id}`
                          )
                        }
                      >
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>
                          <Button
                            customClass="border-radius0"
                            onClick={() =>
                              history.push(
                                `${ROUTERS.PAGE_CONSTRUCTION}/${data.id}`
                              )
                            }
                          >
                            Xem tiến độ
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default ConstructionManager;
