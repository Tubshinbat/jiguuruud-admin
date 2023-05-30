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
    type: "CLEAR_PLATFORM",
  };
};

// SAVE PLATFORM
export const savePlatformInit = () => {
  return {
    type: "CREATE_PLATFORM_INIT",
  };
};

export const savePlatform = (data) => {
  return function (dispatch) {
    dispatch(savePlatformStart());
    axios
      .post(`/platforms`, data)
      .then((response) => {
        const result = response.data;
        dispatch(savePlatformSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(savePlatformError(resError));
      });
  };
};

export const savePlatformStart = () => {
  return {
    type: "CREATE_PLATFORM_START",
  };
};

export const savePlatformSuccess = (result) => {
  return {
    type: "CREATE_PLATFORM_SUCCESS",
    platform: result,
  };
};

export const savePlatformError = (error) => {
  return {
    type: "CREATE_PLATFORM_ERROR",
    error,
  };
};

// Excel platform
export const getExcelData = (query) => {
  return function (dispatch) {
    dispatch(getExcelDataStart());
    axios
      .get("platforms/excel?" + query)
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
    type: "GET_PLATFORM_EXCELDATA_START",
  };
};

const getExcelDataSuccess = (data) => {
  return {
    type: "GET_PLATFORM_EXCELDATA_SUCCESS",
    excel: data,
  };
};

const getExcelDataError = (error) => {
  return {
    type: "GET_PLATFORM_EXCELDATA_ERROR",
    error,
  };
};

// LOAD PLATFORM

export const loadPlatform = (query = "") => {
  return function (dispatch) {
    dispatch(loadPlatformStart());
    axios
      .get("platforms?" + query)
      .then((response) => {
        const loadPlatform = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadPlatformSuccess(loadPlatform));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(loadPlatformError(resError));
      });
  };
};

export const loadPlatformStart = () => {
  return {
    type: "LOAD_PLATFORMS_START",
  };
};

export const loadPlatformSuccess = (platforms, pagination) => {
  return {
    type: "LOAD_PLATFORMS_SUCCESS",
    platforms,
    pagination,
  };
};

export const loadPlatformError = (error) => {
  return {
    type: "LOAD_PLATFORMS_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_PLATFORM_PAGINATION",
    pagination,
  };
};

export const deleteMultPlatform = (ids) => {
  return function (dispatch) {
    dispatch(deleteMultStart());
    axios
      .delete("platforms/delete", { params: { id: ids } })
      .then((response) => {
        const deletePlatform = response.data.data;
        dispatch(deletePlatformSuccess(deletePlatform));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(deletePlatformError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_PLATFORM_START",
  };
};

export const deletePlatformSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_PLATFORM_SUCCESS",
    deletePlatform: deleteData,
  };
};

export const deletePlatformError = (error) => {
  return {
    type: "DELETE_MULT_PLATFORM_ERROR",
    error,
  };
};

// GET PLATFORM

export const getInit = () => {
  return {
    type: "GET_PLATFORM_INIT",
  };
};

export const getPlatform = (id) => {
  return function (dispatch) {
    dispatch(getPlatformStart());
    axios
      .get("platforms/" + id)
      .then((response) => {
        const platform = response.data.data;
        dispatch(getPlatformSuccess(platform));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getPlatformError(resError));
      });
  };
};

export const getPlatformStart = () => {
  return {
    type: "GET_PLATFORM_START",
  };
};

export const getPlatformSuccess = (platform) => {
  return {
    type: "GET_PLATFORM_SUCCESS",
    platform,
  };
};

export const getPlatformError = (error) => {
  return {
    type: "GET_PLATFORM_ERROR",
    error,
  };
};

//UPDATE PLATFORM

export const updatePlatform = (id, data) => {
  return function (dispatch) {
    dispatch(updatePlatformStart());
    axios
      .put(`platforms/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updatePlatformSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(updatePlatformError(resError));
      });
  };
};

export const updatePlatformStart = () => {
  return {
    type: "UPDATE_PLATFORM_START",
  };
};

export const updatePlatformSuccess = (result) => {
  return {
    type: "UPDATE_PLATFORM_SUCCESS",
    updatePlatform: result,
  };
};

export const updatePlatformError = (error) => {
  return {
    type: "UPDATE_PLATFORM_ERROR",
    error,
  };
};

export const getCountPlatform = () => {
  return function (dispatch) {
    dispatch(getCountPlatformStart());

    axios
      .get(`platforms/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountPlatformSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCountPlatformError(resError));
      });
  };
};

export const getCountPlatformStart = () => {
  return {
    type: "GET_COUNT_PLATFORM_START",
  };
};

export const getCountPlatformSuccess = (result) => {
  return {
    type: "GET_COUNT_PLATFORM_SUCCESS",
    orderCount: result,
  };
};

export const getCountPlatformError = (error) => {
  return {
    type: "GET_COUNT_PLATFORM_ERROR",
    error,
  };
};
