import React, { useState } from 'react';
import MainLayout from 'commons/components/MainLayout';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import IMAGES from 'themes/images';
import FormSubmitWarranty from '../../../commons/components/Form/FormSubmitWarranty';
function Warranty() {
  const [activeKey, setActiveKey] = useState(null); // Track which accordion is open
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle open/close accordion
  };
  const handleClose = () => setShowSuccessToast(false);

  return (
    <MainLayout
      //   dataSeo={dataSeo}
      headTitle={`Bảo Hành`}
      showSuccessToast={showSuccessToast}
      handleClose={handleClose}
    >
      <div className="container-fluid warranty">
        <div className="row">
          <div className="warranty__banner">
          </div>
          <div className="warranty__form">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="0"
                      onClick={() => handleToggle('0')}
                    >
                      chính sách bảo hành
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <img
                        className={`chevron-down ${
                          activeKey === '0' ? 'rotate' : ''
                        }`}
                        src={IMAGES.chevronDown}
                        alt="chevronDown"
                        onClick={() => handleToggle('0')}
                      />
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="1"
                      onClick={() => handleToggle('1')}
                    >
                      trung tâm bảo hành
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <img
                        className={`chevron-down ${
                          activeKey === '1' ? 'rotate' : ''
                        }`}
                        src={IMAGES.chevronDown}
                        alt="chevronDown"
                        onClick={() => handleToggle('1')}
                      />
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="2"
                      onClick={() => handleToggle('2')}
                    >
                      Kích hoạt bảo hành
                    </Accordion.Toggle>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      <img
                        className={`chevron-down ${
                          activeKey === '2' ? 'rotate' : ''
                        }`}
                        src={IMAGES.chevronDown}
                        alt="chevronDown"
                        onClick={() => handleToggle('2')}
                      />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <FormSubmitWarranty
                        setShowSuccessToast={setShowSuccessToast}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Warranty;
