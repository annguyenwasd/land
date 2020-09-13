import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React, { memo } from "react";
import Person from "../classes/Person";

const honorifics = ["Ông", "Bà"];
const districtTypes = ["Quận", "Huyện"];
const cityTypes = ["Tỉnh", "Thành phố"];

const defaultGutter = { xs: 16, md: 16 };

function Side({ sideName, people, onChange }) {
  const [form] = Form.useForm();
  return (
    <Form
      initialValues={{ people }}
      onFinish={(_, values) => {
        onChange(values);
      }}
      form={form}
    >
      <Form.List name="people">
        {(fields, { add, remove }) => {
          return (
            <div>
              <Button
                style={{ marginBottom: 20 }}
                onClick={() => add(new Person())}
              >{`Thêm bên ${sideName}`}</Button>
              {fields.map((field, index) => {
                const person = form.getFieldValue(["people", field.name]);

                return (
                  <React.Fragment key={field.key}>
                    <Row gutter={defaultGutter}>
                      <Col md={16} xs={24}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "fullName"]}
                          name={[field.name, "fullName"]}
                          label="Họ và tên"
                          rules={[
                            {
                              required: true,
                              message: "Họ và tên không được để trống.",
                            },
                          ]}
                        >
                          <Input
                            addonBefore={
                              <Form.Item
                                {...field}
                                fieldKey={[field.fieldKey, "honorific"]}
                                name={[field.name, "honorific"]}
                                noStyle
                              >
                                <Select style={{ width: 70 }}>
                                  {honorifics.map((honorific) => (
                                    <Select.Option
                                      key={honorific}
                                      value={honorific}
                                    >
                                      {honorific}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            }
                          />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "yearOfBirth"]}
                          name={[field.name, "yearOfBirth"]}
                          label="Sinh năm"
                          rules={[
                            {
                              required: true,
                              message: "Năm sinh không được để trống.",
                            },
                          ]}
                        >
                          <DatePicker style={{ width: "100%" }} picker="year" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={defaultGutter}>
                      <Col md={8} xs={12}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "identifier"]}
                          name={[field.name, "identifier"]}
                          label="CMND số"
                          rules={[
                            {
                              required: true,
                              message: "Số CMND không được để trống.",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={12}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "idDate"]}
                          name={[field.name, "idDate"]}
                          label="Ngày cấp"
                          rules={[
                            {
                              required: true,
                              message: "Ngày cấp không được để trống.",
                            },
                          ]}
                        >
                          <DatePicker
                            style={{ width: "100%" }}
                            format="DD/MM/YYYY"
                          />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "idLocation"]}
                          name={[field.name, "idLocation"]}
                          label="Nơi cấp"
                          rules={[
                            {
                              required: true,
                              message: "Nơi cấp không được để trống.",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      {...field}
                      fieldKey={[field.fieldKey, "houseNumber"]}
                      name={[field.name, "houseNumber"]}
                      label="Địa chỉ"
                      rules={[
                        {
                          required: true,
                          message: "Địa chỉ không được để trống.",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Row gutter={defaultGutter}>
                      <Col md={12} xs={24}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "district"]}
                          name={[field.name, "district"]}
                          label="Quận/Huyện"
                          rules={[
                            {
                              required: true,
                              message: "Quận/Huyện không được để trống.",
                            },
                          ]}
                        >
                          <Input
                            addonBefore={
                              <Form.Item
                                {...field}
                                fieldKey={[field.fieldKey, "districtType"]}
                                name={[field.name, "districtType"]}
                                noStyle
                              >
                                <Select style={{ width: 90 }}>
                                  {districtTypes.map((districType) => (
                                    <Select.Option
                                      key={districType}
                                      value={districType}
                                    >
                                      {districType}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            }
                          />
                        </Form.Item>
                      </Col>
                      <Col md={12} xs={24}>
                        <Form.Item
                          {...field}
                          fieldKey={[field.fieldKey, "city"]}
                          name={[field.name, "city"]}
                          label="Tỉnh/TP"
                          rules={[
                            {
                              required: true,
                              message: "Tỉnh/TP không được để trống.",
                            },
                          ]}
                        >
                          <Input
                            addonBefore={
                              <Form.Item
                                {...field}
                                fieldKey={[field.fieldKey, "cityType"]}
                                name={[field.name, "cityType"]}
                                noStyle
                              >
                                <Select style={{ width: 120 }}>
                                  {cityTypes.map((cityType) => (
                                    <Select.Option
                                      key={cityType}
                                      value={cityType}
                                    >
                                      {cityType}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    {fields.length > 1 ? (
                      <Button danger type="text" onClick={() => remove(index)}>
                        {`Xoá ${
                          person.fullName
                            ? `${person.honorific} ${person.fullName}`
                            : ""
                        }`}
                      </Button>
                    ) : null}
                  </React.Fragment>
                );
              })}
            </div>
          );
        }}
      </Form.List>
      <button type="subbmit">submit</button>
    </Form>
  );
}

export default memo(Side);
