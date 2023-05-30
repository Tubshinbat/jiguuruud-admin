import React, { useEffect, useState } from "react";
import { Form, Input, Button, Switch, Upload, message } from "antd";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";

//Components
import PageTitle from "../../../Components/PageTitle";
import { InboxOutlined } from "@ant-design/icons";
import Loader from "../../../Components/Generals/Loader";

//Actions
import { tinymceAddPhoto } from "../../../redux/actions/imageActions";

import * as actions from "../../../redux/actions/platformActions";

// Lib
import base from "../../../base";
import axios from "../../../axios-base";
import { toastControl } from "src/lib/toasControl";
import { convertFromdata } from "../../../lib/handleFunction";

const requiredRule = {
  required: true,
  message: "Тус талбарыг заавал бөглөнө үү",
};

const { Dragger } = Upload;

const Edit = (props) => {
  const [form] = Form.useForm();
  const [pictures, setPictures] = useState({});
  const [icons, setIcons] = useState({});
  const [setProgress] = useState(0);
  const [isDirect, setIsDirect] = useState(false);
  const [deleteFiles, setDeleteFiles] = useState([]);
  const [loading, setLoading] = useState({
    visible: false,
    message: "",
  });
  const [checkedRadio, setCheckedRadio] = useState({
    status: true,
    isDirect: false,
  });

  // FUNCTIONS
  const init = () => {
    props.getPlatform(props.match.params.id);
  };

  const clear = () => {
    props.clear();
    form.resetFields();
    setPictures({});
    setIcons({});
    setLoading(false);
  };

  // -- TREE FUNCTIONS

  const handleChange = (event) => {
    form.setFieldsValue({ details: event });
  };

  const handleAdd = (values, status = null) => {
    if (status == "draft") values.status = false;
    if (icons && icons.name) values.icon = icons.name;
    if (pictures && pictures.name) values.picture = pictures.name;

    if (deleteFiles && deleteFiles.length > 0) {
      deleteFiles.map(async (deleteFile) => {
        await axios.delete("/imgupload", { data: { file: deleteFile } });
      });
    }

    const data = {
      ...values,
      isDirect: values.isDirect || false,
    };

    const sendData = convertFromdata(data);
    props.updatePlatform(props.match.params.id, sendData);
  };

  const handleRemove = (stType, file) => {
    let list;

    switch (stType) {
      case "icons":
        list = icons;
        setIcons({});
        break;
      default:
        list = pictures;
        setPictures({});
        break;
    }
    setDeleteFiles((bf) => [...bf, list]);
  };

  // CONFIGS

  const uploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("file", file);
    try {
      setLoading({ visible: true, message: "Түр хүлээнэ үү файл хуулж байна" });
      const res = await axios.post("/imgupload", fmData, config);
      const data = {
        name: res.data.data,
        status: "done",
      };
      setIcons(data);
      onSuccess("Ok");
      message.success(res.data.data + " Хуулагдлаа");
      setLoading({ visible: false, message: "" });
    } catch (error) {
      toastControl("error", error);
      onError({ error });
    }
  };

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    fmData.append("file", file);
    try {
      const res = await axios.post("/imgupload", fmData, config);
      const img = {
        name: res.data.data,
        url: `${base.cdnUrl}${res.data.data}`,
      };
      setPictures(img);
      onSuccess("Ok");
      message.success(res.data.data + " Хуулагдлаа");
      return img;
    } catch (err) {
      toastControl("error", err);
      onError({ err });
      return false;
    }
  };

  const uploadOptions = {
    onRemove: (file) => handleRemove("pictures", file),
    fileList: pictures && pictures.name && [pictures],
    customRequest: uploadImage,
    accept: "image/*",
    name: "picture",
    maxCount: 1,
    listType: "picture",
  };

  const iconOptions = {
    onRemove: (file) => handleRemove("icons", file),
    fileList: icons && icons.name && [icons],
    customRequest: uploadFile,
    accept: "image/*",
    name: "icon",
    maxCount: 1,
    listType: "icon",
  };

  // USEEFFECT
  useEffect(() => {
    init();
    return () => clear();
  }, []);

  // Ямар нэгэн алдаа эсвэл амжилттай үйлдэл хийгдвэл энд useEffect барьж аваад TOAST харуулна
  useEffect(() => {
    toastControl("error", props.error);
  }, [props.error]);

  useEffect(() => {
    if (props.success) {
      toastControl("success", props.success);
      setTimeout(() => props.history.replace("/platforms"), 2000);
    }
  }, [props.success]);

  useEffect(() => {
    if (props.platform) {
      form.setFieldsValue({ ...props.platform });
      if (props.platform.picture) {
        const url = base.cdnUrl + props.platform.picture;
        setPictures({
          name: props.platform.picture,
          url,
        });
      }
      if (props.platform.icon) {
        setIcons((s) => ({ name: props.platform.icon }));
      }
      setCheckedRadio((bc) => ({
        ...bc,
        status: props.platform.status,
        isDirect: props.platform.isDirect,
      }));
      setIsDirect(() => props.platform.isDirect);
    }
  }, [props.platform]);

  return (
    <>
      <div className="content-wrapper">
        <PageTitle name="Платформ шинчлэх" />
        <div className="page-sub-menu"></div>
        <div className="content">
          <Loader show={loading.visible}> {loading.message} </Loader>
          <div className="container-fluid">
            <Form layout="vertical" form={form}>
              <div className="row">
                <div className="col-8">
                  <div className="card card-primary">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <Form.Item
                            label="Платформын нэр"
                            name="name"
                            rules={[requiredRule]}
                          >
                            <Input placeholder="Платформын нэрийг оруулна уу" />
                          </Form.Item>
                        </div>
                        <div className="col-12">
                          <Form.Item
                            label="Холбоос линк"
                            name="direct"
                            style={{
                              display: isDirect === true ? "block" : "none",
                            }}
                            rules={isDirect === true && [requiredRule]}
                          >
                            <Input placeholder="Холбох линкээ оруулна уу" />
                          </Form.Item>
                        </div>
                        <div className="col-12">
                          <Form.Item
                            label="Дэлгэрэнгүй"
                            name="details"
                            getValueFromEvent={(e) =>
                              e.target && e.target.getContent()
                            }
                            rules={[requiredRule]}
                          >
                            <Editor
                              apiKey="2nubq7tdhudthiy6wfb88xgs36os4z3f4tbtscdayg10vo1o"
                              init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                  "advlist autolink lists link image charmap print preview anchor",
                                  "searchreplace visualblocks code fullscreen",
                                  "insertdatetime media table paste code help wordcount image media  code  table  ",
                                ],
                                toolbar:
                                  "undo redo | fontselect fontsizeselect formatselect blockquote  | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help | link image | quickbars | media | code | tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
                                file_picker_types: "image",
                                automatic_uploads: false,
                                file_picker_callback: function (
                                  cb,
                                  value,
                                  meta
                                ) {
                                  var input = document.createElement("input");
                                  input.setAttribute("type", "file");
                                  input.setAttribute("accept", "image/*");
                                  input.onchange = async function () {
                                    var file = this.files[0];
                                    const fData = new FormData();
                                    fData.append("file", file);
                                    const res = await axios.post(
                                      "/imgupload",
                                      fData
                                    );
                                    const url =
                                      `${base.cdnUrl}` + res.data.data;
                                    cb(url);
                                  };
                                  input.click();
                                },
                              }}
                              onEditorChange={(event) => handleChange(event)}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div class="card-header">
                      <h3 class="card-title">ТОХИРГОО</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <Form.Item label="Идэвхтэй эсэх" name="status">
                            <Switch
                              checkedChildren="Идэвхтэй"
                              unCheckedChildren="Идэвхгүй"
                              size="medium"
                              checked={checkedRadio.status}
                              onChange={(checked) =>
                                setCheckedRadio((bc) => ({
                                  ...bc,
                                  status: checked,
                                }))
                              }
                              defaultChecked
                            />
                          </Form.Item>
                        </div>
                        <div className="col-6">
                          <Form.Item
                            label="Шууд өөр линкрүү үсрүүлэх эсэх"
                            name="isDirect"
                          >
                            <Switch
                              size="medium"
                              onChange={(value) => setIsDirect(value)}
                              checked={isDirect}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="control-bottons">
                        <Button
                          key="submit"
                          htmlType="submit"
                          className="add-button"
                          loading={props.loading}
                          onClick={() => {
                            form
                              .validateFields()
                              .then((values) => {
                                handleAdd(values);
                              })
                              .catch((info) => {
                                // console.log(info);
                              });
                          }}
                        >
                          Хадгалах
                        </Button>
                        <Button
                          key="draft"
                          type="primary"
                          onClick={() => {
                            form
                              .validateFields()
                              .then((values) => {
                                handleAdd(values, "draft");
                              })
                              .catch((info) => {
                                // console.log(info);
                              });
                          }}
                        >
                          Ноороглох
                        </Button>
                        <Button onClick={() => props.history.goBack()}>
                          Буцах
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div class="card-header">
                      <h3 class="card-title">Зураг оруулах</h3>
                    </div>
                    <div className="card-body">
                      <Dragger
                        {...uploadOptions}
                        className="upload-list-inline"
                      >
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Зургаа энэ хэсэг рүү чирч оруулна уу
                        </p>
                        <p className="ant-upload-hint">
                          Нэг болон түүнээс дээш файл хуулах боломжтой
                        </p>
                      </Dragger>
                    </div>
                  </div>
                  <div className="card">
                    <div class="card-header">
                      <h3 class="card-title">Дүрс оруулах</h3>
                    </div>
                    <div className="card-body">
                      <Dragger
                        {...iconOptions}
                        maxCount={1}
                        className="upload-list-inline"
                      >
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Зургаа энэ хэсэг рүү чирч оруулна уу
                        </p>
                        <p className="ant-upload-hint">
                          Нэг болон түүнээс дээш файл хуулах боломжтой
                        </p>
                      </Dragger>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.platformReducer.success,
    error: state.platformReducer.error,
    loading: state.platformReducer.loading,
    platform: state.platformReducer.platform,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tinymceAddPhoto: (file) => dispatch(tinymceAddPhoto(file)),
    getPlatform: (id, data) => dispatch(actions.getPlatform(id, data)),
    updatePlatform: (id, data) => dispatch(actions.updatePlatform(id, data)),
    clear: () => dispatch(actions.clear()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
