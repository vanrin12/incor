import React, { useState } from 'react';
import { Row, Col, Form, Button, Toast } from 'react-bootstrap';

function FormSubmitWarranty({ setShowSuccessToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    productCode: '',
    activationCode: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Full Name Validation
    if (!formData.fullName.trim()) {
      formErrors.fullName = 'Họ và tên không được để trống';
      valid = false;
    }

    // Phone Number Validation
    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = 'Số điện thoại không được để trống';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Số điện thoại phải là 10 chữ số';
      valid = false;
    }

    // Product Code Validation
    if (!formData.productCode.trim()) {
      formErrors.productCode = 'Mã sản phẩm không được để trống';
      valid = false;
    }

    // Activation Code Validation
    if (!formData.activationCode.trim()) {
      formErrors.activationCode = 'Mã kích hoạt không được để trống';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        setShowSuccessToast(true);
    }
  };

  return (
    <div className="form-submit-warranty">
      <h3>BẢO HÀNH ĐIỆN TỬ</h3>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formFullName">
              <Form.Label className="mb-1 small">HỌ VÀ TÊN</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label className="mb-1 small">SỐ ĐIỆN THOẠI</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formProductCode">
              <Form.Label className="mb-1 small">Mã Sản Phẩm</Form.Label>
              <Form.Control
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                isInvalid={!!errors.productCode}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formActivationCode">
              <Form.Label className="mb-1 small">Mã Kích Hoạt</Form.Label>
              <Form.Control
                type="text"
                name="activationCode"
                value={formData.activationCode}
                onChange={handleInputChange}
                isInvalid={!!errors.activationCode}
              />
              <Form.Control.Feedback type="invalid">
                {errors.activationCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-right">
          <Button variant="danger" className="px-5 btn-submit" type="submit">
            Kích Hoạt
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormSubmitWarranty;
