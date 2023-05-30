import axios from "../../axios-base";

export const clear = () => {
  return function (dispatch, getState) {
    dispatch(clearStart);
    dispatch(loadcostTypes);
  };
};

const errorMessage = (error) => {
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

export const clearStart = () => {
  return {
    type: "CLEAR_COSTTYPES",
  };
};

export const loadcostTypes = () => {
  return function (dispatch, getState) {
    dispatch(loadcostTypesStart());
    axios
      .get("costtypes")
      .then((response) => {
        const result = response.data.data;
        dispatch(loadcostTypesSuccess(result));
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(loadcostTypesError(resultError));
      });
  };
};
export const loadcostTypesStart = () => {
  return {
    type: "LOAD_COST_TYPES_START",
  };
};

export const loadcostTypesSuccess = (result) => {
  return {
    type: "LOAD_COST_TYPES_SUCCESS",
    costtypes: result,
  };
};

export const loadcostTypesError = (error) => {
  return {
    type: "LOAD_COST_TYPES_ERROR",
    error,
  };
};

// SINGLE CATEGORY

export const loadCostType = (newsCategoryId) => {
  return function (dispatch, getState) {
    dispatch(loadCostTypeStart());
    axios
      .get(`costtypes/${newsCategoryId}`)
      .then((response) => {
        const loadedCostType = response.data.data;
        dispatch(loadCostTypeSuccess(loadedCostType));
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(loadCostTypeError(resultError));
      });
  };
};

export const loadCostTypeStart = () => {
  return {
    type: "LOAD_COST_TYPE_START",
  };
};

export const loadCostTypeSuccess = (result) => {
  return {
    type: "LOAD_COST_TYPE_SUCCESS",
    costtype: result,
  };
};

export const loadCostTypeError = (error) => {
  return {
    type: "LOAD_COST_TYPE_ERROR",
    error,
  };
};

// Change positions
export const changePosition = (data) => {
  return function (dispatch) {
    dispatch(changePositionStart());

    axios
      .post("costtypes/change", data)
      .then((response) => {
        const result = response.data.data;
        dispatch(changePositionSuccess(result));
        dispatch(loadcostTypes());
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(changePositionError(resultError));
      });
  };
};

export const changePositionStart = (result) => {
  return {
    type: "NEWSCATEGORIES_CHANGE_POSITION_START",
  };
};

export const changePositionSuccess = (data) => {
  return {
    type: "NEWSCATEGORIES_CHANGE_POSITION_SUCCESS",
    menus: data,
  };
};

export const changePositionError = (error) => {
  return {
    type: "NEWSCATEGORIES_CHANGE_POSITION_ERROR",
    error: error,
  };
};

// DELETE CATEGORY

export const deleteCostType = (categoryId, data) => {
  return function (dispatch, getState) {
    dispatch(deleteCostTypeStart());

    axios
      .delete(`costtypes/${categoryId}`, data)
      .then((response) => {
        const resultCategory = response.data.data;
        dispatch(deleteCostTypeSuccess(resultCategory));
        dispatch(loadcostTypes());
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(deleteCostTypeError(resultError));
      });
  };
};

export const deleteCostTypeStart = () => {
  return {
    type: "DELETE_COST_TYPE_START",
  };
};

export const deleteCostTypeSuccess = (result) => {
  return {
    type: "DELETE_COST_TYPE_SUCCESS",
    dlNews: result,
  };
};

export const deleteCostTypeError = (error) => {
  return {
    type: "DELETE_COST_TYPE_ERROR",
    error,
  };
};

// SAVE CATEGORY

export const saveCostType = (category) => {
  return function (dispatch, getState) {
    dispatch(saveCostTypeStart());
    let data = {
      name: category.name,
      picture: category.picture,
    };

    if (category.parentId !== null) {
      data = {
        name: category.name,
        parentId: category.parentId,
        picture: category.picture,
      };
    }

    data.language = category.language;
    data.status = category.status;

    axios
      .post(`costtypes`, data)
      .then((response) => {
        const resultCategory = response.data.data;
        dispatch(saveCostTypeSuccess(resultCategory));
        dispatch(loadcostTypes());
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(saveCostTypeError(resultError));
      });
  };
};

export const saveCostTypeStart = () => {
  return {
    type: "CREATE_COST_TYPE_START",
  };
};

export const saveCostTypeSuccess = (resultCategory) => {
  return {
    type: "CREATE_COST_TYPE_SUCCESS",
    resultCategory: resultCategory,
  };
};

export const saveCostTypeError = (error) => {
  return {
    type: "CREATE_COST_TYPE_ERROR",
    error: error,
  };
};

// UPDATE CATEGORY

export const updateCostType = (category, id) => {
  return function (dispatch) {
    dispatch(updateCostTypeStart());
    const data = {
      name: category.name,
      picture: category.picture,
    };

    axios
      .put(`costtypes/${id}`, data)
      .then((response) => {
        const resultCategory = response.data.data;
        dispatch(updateCostTypeSuccess(resultCategory));
        dispatch(loadcostTypes());
        dispatch(loadCostType(id));
      })
      .catch((error) => {
        const resultError = errorMessage(error);
        dispatch(updateCostTypeError(resultError));
      });
  };
};

export const updateCostTypeStart = () => {
  return {
    type: "UPDATE_COST_TYPE_START",
  };
};

export const updateCostTypeSuccess = (resultCategory) => {
  return {
    type: "UPDATE_COST_TYPE_SUCCESS",
    resultCategory: resultCategory,
  };
};

export const updateCostTypeError = (error) => {
  return {
    type: "UPDATE_COST_TYPE_ERROR",
    error: error,
  };
};
