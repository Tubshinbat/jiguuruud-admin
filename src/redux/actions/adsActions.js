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
    type: "CLEAR_ADS",
  };
};

// SAVE ADS
export const saveAdsInit = () => {
  return {
    type: "CREATE_ADS_INIT",
  };
};

export const saveAds = (data) => {
  return function (dispatch) {
    dispatch(saveAdsStart());
    axios
      .post(`/adsies`, data)
      .then((response) => {
        const result = response.data;
        dispatch(saveAdsSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(saveAdsError(resError));
      });
  };
};

export const saveAdsStart = () => {
  return {
    type: "CREATE_ADS_START",
  };
};

export const saveAdsSuccess = (result) => {
  return {
    type: "CREATE_ADS_SUCCESS",
    ads: result,
  };
};

export const saveAdsError = (error) => {
  return {
    type: "CREATE_ADS_ERROR",
    error,
  };
};

// Excel ads
export const getExcelData = (query) => {
  return function (dispatch) {
    dispatch(getExcelDataStart());
    axios
      .get("adsies/excel?" + query)
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
    type: "GET_ADS_EXCELDATA_START",
  };
};

const getExcelDataSuccess = (data) => {
  return {
    type: "GET_ADS_EXCELDATA_SUCCESS",
    excel: data,
  };
};

const getExcelDataError = (error) => {
  return {
    type: "GET_ADS_EXCELDATA_ERROR",
    error,
  };
};

// LOAD ADS

export const loadAds = (query = "") => {
  return function (dispatch) {
    dispatch(loadAdsStart());
    axios
      .get("/adsies?" + query)
      .then((response) => {
        const loadAds = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadAdsSuccess(loadAds));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(loadAdsError(resError));
      });
  };
};

export const loadAdsStart = () => {
  return {
    type: "LOAD_ADSIES_START",
  };
};

export const loadAdsSuccess = (adsies, pagination) => {
  return {
    type: "LOAD_ADSIES_SUCCESS",
    adsies,
    pagination,
  };
};

export const loadAdsError = (error) => {
  return {
    type: "LOAD_ADSIES_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_ADS_PAGINATION",
    pagination,
  };
};

export const deleteMultAds = (ids) => {
  return function (dispatch) {
    dispatch(deleteMultStart());
    axios
      .delete("adsies/delete", { params: { id: ids } })
      .then((response) => {
        const deleteAds = response.data.data;
        dispatch(deleteAdsSuccess(deleteAds));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(deleteAdsError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_ADS_START",
  };
};

export const deleteAdsSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_ADS_SUCCESS",
    deleteAds: deleteData,
  };
};

export const deleteAdsError = (error) => {
  return {
    type: "DELETE_MULT_ADS_ERROR",
    error,
  };
};

// GET ADS

export const getInit = () => {
  return {
    type: "GET_ADS_INIT",
  };
};

export const getAds = (id) => {
  return function (dispatch) {
    dispatch(getAdsStart());
    axios
      .get("adsies/" + id)
      .then((response) => {
        const ads = response.data.data;
        dispatch(getAdsSuccess(ads));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getAdsError(resError));
      });
  };
};

export const getAdsStart = () => {
  return {
    type: "GET_ADS_START",
  };
};

export const getAdsSuccess = (ads) => {
  return {
    type: "GET_ADS_SUCCESS",
    ads,
  };
};

export const getAdsError = (error) => {
  return {
    type: "GET_ADS_ERROR",
    error,
  };
};

//UPDATE ADS

export const updateAds = (id, data) => {
  return function (dispatch) {
    dispatch(updateAdsStart());
    axios
      .put(`adsies/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updateAdsSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(updateAdsError(resError));
      });
  };
};

export const updateAdsStart = () => {
  return {
    type: "UPDATE_ADS_START",
  };
};

export const updateAdsSuccess = (result) => {
  return {
    type: "UPDATE_ADS_SUCCESS",
    updateAds: result,
  };
};

export const updateAdsError = (error) => {
  return {
    type: "UPDATE_ADS_ERROR",
    error,
  };
};

export const getCountAds = () => {
  return function (dispatch) {
    dispatch(getCountAdsStart());

    axios
      .get(`adsies/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountAdsSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCountAdsError(resError));
      });
  };
};

export const getCountAdsStart = () => {
  return {
    type: "GET_COUNT_ADS_START",
  };
};

export const getCountAdsSuccess = (result) => {
  return {
    type: "GET_COUNT_ADS_SUCCESS",
    orderCount: result,
  };
};

export const getCountAdsError = (error) => {
  return {
    type: "GET_COUNT_ADS_ERROR",
    error,
  };
};
