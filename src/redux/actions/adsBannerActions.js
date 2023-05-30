import axios from "../../axios-base";

const errorBuild = (error) => {
  let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

  if (resError) {
    resError = error.message;
  }

  if (error.response !== undefined && error.response.status !== undefined) {
    resError = error.response.status;
  }
  if (
    error.response !== undefined &&
    error.response.data !== undefined &&
    error.response.data.error !== undefined
  ) {
    resError = error.response.data.error.message;
  }
  return resError;
};

export const clear = () => {
  return {
    type: "CLEAR_ADSBANNER",
  };
};

// SAVE ADSBANNER
export const saveAdsBannerInit = () => {
  return {
    type: "CREATE_ADSBANNER_INIT",
  };
};

export const saveAdsBanner = (data) => {
  return function (dispatch) {
    dispatch(saveAdsBannerStart());
    axios
      .post(`/adsbanners`, data)
      .then((response) => {
        const result = response.data;
        dispatch(saveAdsBannerSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(saveAdsBannerError(resError));
      });
  };
};

export const saveAdsBannerStart = () => {
  return {
    type: "CREATE_ADSBANNER_START",
  };
};

export const saveAdsBannerSuccess = (result) => {
  return {
    type: "CREATE_ADSBANNER_SUCCESS",
    adsBanner: result,
  };
};

export const saveAdsBannerError = (error) => {
  return {
    type: "CREATE_ADSBANNER_ERROR",
    error,
  };
};

// Excel adsBanner
export const getExcelData = (query) => {
  return function (dispatch) {
    dispatch(getExcelDataStart());
    axios
      .get("/adsbanners/excel?" + query)
      .then((response) => {
        const data = response.data.data;
        dispatch(getExcelDataSuccess(data));
      })
      .catch((error) => {
        let resError = errorBuild(error);
        dispatch(getExcelDataError(resError));
      });
  };
};

const getExcelDataStart = () => {
  return {
    type: "GET_ADSBANNER_EXCELDATA_START",
  };
};

const getExcelDataSuccess = (data) => {
  return {
    type: "GET_ADSBANNER_EXCELDATA_SUCCESS",
    excel: data,
  };
};

const getExcelDataError = (error) => {
  return {
    type: "GET_ADSBANNER_EXCELDATA_ERROR",
    error,
  };
};

// LOAD ADSBANNER

export const loadAdsBanner = (query = "") => {
  return function (dispatch) {
    dispatch(loadAdsBannerStart());
    axios
      .get("/adsbanners?" + query)
      .then((response) => {
        const loadAdsBanner = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadAdsBannerSuccess(loadAdsBanner));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(loadAdsBannerError(resError));
      });
  };
};

export const loadAdsBannerStart = () => {
  return {
    type: "LOAD_ADSBANNERIES_START",
  };
};

export const loadAdsBannerSuccess = (adsBanners, pagination) => {
  return {
    type: "LOAD_ADSBANNERIES_SUCCESS",
    adsBanners,
    pagination,
  };
};

export const loadAdsBannerError = (error) => {
  return {
    type: "LOAD_ADSBANNERIES_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_ADSBANNER_PAGINATION",
    pagination,
  };
};

export const deleteMultAdsBanner = (ids) => {
  return function (dispatch) {
    dispatch(deleteMultStart());
    axios
      .delete("/adsbanners/delete", { params: { id: ids } })
      .then((response) => {
        const deleteAdsBanner = response.data.data;
        dispatch(deleteAdsBannerSuccess(deleteAdsBanner));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(deleteAdsBannerError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_ADSBANNER_START",
  };
};

export const deleteAdsBannerSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_ADSBANNER_SUCCESS",
    deleteAdsBanner: deleteData,
  };
};

export const deleteAdsBannerError = (error) => {
  return {
    type: "DELETE_MULT_ADSBANNER_ERROR",
    error,
  };
};

// GET ADSBANNER

export const getInit = () => {
  return {
    type: "GET_ADSBANNER_INIT",
  };
};

export const getAdsBanner = (id) => {
  return function (dispatch) {
    dispatch(getAdsBannerStart());
    axios
      .get("/adsbanners/" + id)
      .then((response) => {
        const adsBanner = response.data.data;
        dispatch(getAdsBannerSuccess(adsBanner));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getAdsBannerError(resError));
      });
  };
};

export const getAdsBannerStart = () => {
  return {
    type: "GET_ADSBANNER_START",
  };
};

export const getAdsBannerSuccess = (adsBanner) => {
  return {
    type: "GET_ADSBANNER_SUCCESS",
    adsBanner,
  };
};

export const getAdsBannerError = (error) => {
  return {
    type: "GET_ADSBANNER_ERROR",
    error,
  };
};

//UPDATE ADSBANNER

export const updateAdsBanner = (id, data) => {
  return function (dispatch) {
    dispatch(updateAdsBannerStart());
    axios
      .put(`/adsbanners/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updateAdsBannerSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(updateAdsBannerError(resError));
      });
  };
};

export const updateAdsBannerStart = () => {
  return {
    type: "UPDATE_ADSBANNER_START",
  };
};

export const updateAdsBannerSuccess = (result) => {
  return {
    type: "UPDATE_ADSBANNER_SUCCESS",
    updateAdsBanner: result,
  };
};

export const updateAdsBannerError = (error) => {
  return {
    type: "UPDATE_ADSBANNER_ERROR",
    error,
  };
};

export const getCountAdsBanner = () => {
  return function (dispatch) {
    dispatch(getCountAdsBannerStart());

    axios
      .get(`/adsbanners/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountAdsBannerSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCountAdsBannerError(resError));
      });
  };
};

export const getCountAdsBannerStart = () => {
  return {
    type: "GET_COUNT_ADSBANNER_START",
  };
};

export const getCountAdsBannerSuccess = (result) => {
  return {
    type: "GET_COUNT_ADSBANNER_SUCCESS",
    orderCount: result,
  };
};

export const getCountAdsBannerError = (error) => {
  return {
    type: "GET_COUNT_ADSBANNER_ERROR",
    error,
  };
};
