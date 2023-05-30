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
    type: "CLEAR_COST",
  };
};

// SAVE COST
export const saveCostInit = () => {
  return {
    type: "CREATE_COST_INIT",
  };
};

export const saveCost = (data) => {
  return function (dispatch, getState) {
    dispatch(saveCostStart());
    axios
      .post(`/costs`, data)
      .then((response) => {
        const result = response.data;
        dispatch(saveCostSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(saveCostError(resError));
      });
  };
};

export const saveCostStart = () => {
  return {
    type: "CREATE_COST_START",
  };
};

export const saveCostSuccess = (result) => {
  return {
    type: "CREATE_COST_SUCCESS",
    cost: result,
  };
};

export const saveCostError = (error) => {
  return {
    type: "CREATE_COST_ERROR",
    error,
  };
};

// Excel cost
export const getExcelData = (query) => {
  return function (dispatch) {
    dispatch(getExcelDataStart());
    axios
      .get("costs/excel?" + query)
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
    type: "GET_COST_EXCELDATA_START",
  };
};

const getExcelDataSuccess = (data) => {
  return {
    type: "GET_COST_EXCELDATA_SUCCESS",
    excel: data,
  };
};

const getExcelDataError = (error) => {
  return {
    type: "GET_COST_EXCELDATA_ERROR",
    error,
  };
};

// LOAD COST

export const loadCost = (query = "") => {
  return function (dispatch, getState) {
    dispatch(loadCostStart());
    axios
      .get("costs?" + query)
      .then((response) => {
        const loadCost = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadCostSuccess(loadCost));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(loadCostError(resError));
      });
  };
};

export const loadCostStart = () => {
  return {
    type: "LOAD_COST_START",
  };
};

export const loadCostSuccess = (costs, pagination) => {
  return {
    type: "LOAD_COST_SUCCESS",
    costs,
    pagination,
  };
};

export const loadCostError = (error) => {
  return {
    type: "LOAD_COST_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_PAGINATION",
    pagination,
  };
};

export const deleteMultCost = (ids) => {
  return function (dispatch, getState) {
    dispatch(deleteMultStart());
    axios
      .delete("costs/delete", { params: { id: ids } })
      .then((response) => {
        const deleteCost = response.data.data;
        dispatch(deleteCostSuccess(deleteCost));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(deleteCostError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_COST_START",
  };
};

export const deleteCostSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_COST_SUCCESS",
    deleteCost: deleteData,
  };
};

export const deleteCostError = (error) => {
  return {
    type: "DELETE_MULT_COST_ERROR",
    error,
  };
};

// GET COST

export const getInit = () => {
  return {
    type: "GET_COST_INIT",
  };
};

export const getCost = (id) => {
  return function (dispatch, getState) {
    dispatch(getCostStart());
    axios
      .get("costs/" + id)
      .then((response) => {
        const cost = response.data.data;
        dispatch(getCostSuccess(cost));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCostError(resError));
      });
  };
};

export const getCostStart = () => {
  return {
    type: "GET_COST_START",
  };
};

export const getCostSuccess = (cost) => {
  return {
    type: "GET_COST_SUCCESS",
    cost,
  };
};

export const getCostError = (error) => {
  return {
    type: "GET_COST_ERROR",
    error,
  };
};

//UPDATE COST

export const updateCost = (id, data) => {
  return function (dispatch) {
    dispatch(updateCostStart());
    axios
      .put(`costs/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updateCostSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(updateCostError(resError));
      });
  };
};

export const updateCostStart = () => {
  return {
    type: "UPDATE_COST_START",
  };
};

export const updateCostSuccess = (result) => {
  return {
    type: "UPDATE_COST_SUCCESS",
    updateCost: result,
  };
};

export const updateCostError = (error) => {
  return {
    type: "UPDATE_COST_ERROR",
    error,
  };
};

export const getCountCost = () => {
  return function (dispatch) {
    dispatch(getCountCostStart());

    axios
      .get(`costs/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountCostSuccess(result));
      })
      .catch((error) => {
        const resError = errorBuild(error);
        dispatch(getCountCostError(resError));
      });
  };
};

export const getCountCostStart = () => {
  return {
    type: "GET_COUNT_COST_START",
  };
};

export const getCountCostSuccess = (result) => {
  return {
    type: "GET_COUNT_COST_SUCCESS",
    orderCount: result,
  };
};

export const getCountCostError = (error) => {
  return {
    type: "GET_COUNT_COST_ERROR",
    error,
  };
};
