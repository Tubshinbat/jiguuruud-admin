import axios from "../../axios-base";

export const clear = () => {
  return {
    type: "CLEAR_PARENT",
  };
};

// SAVE PARENT
export const saveParent = (parent) => {
  return function (dispatch, getState) {
    dispatch(saveParentStart());
    axios
      .post(`partners`, parent)
      .then((response) => {
        const result = response.data;
        dispatch(saveParentSuccess(result));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(saveParentError(resError));
      });
  };
};

export const saveParentStart = () => {
  return {
    type: "CREATE_PARENT_START",
  };
};

export const saveParentSuccess = (result) => {
  return {
    type: "CREATE_PARENT_SUCCESS",
    parent: result,
  };
};

export const saveParentError = (error) => {
  return {
    type: "CREATE_PARENT_ERROR",
    error,
  };
};

// LOAD PARENT

export const loadParents = (query = "") => {
  return function (dispatch, getState) {
    dispatch(loadParentsStart());
    axios
      .get("partners?" + query)
      .then((response) => {
        const loadParent = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadParentsSuccess(loadParent));
        dispatch(loadPagination(pagination));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(loadParentsError(resError));
      });
  };
};

export const loadParentsStart = () => {
  return {
    type: "LOAD_PARENTS_START",
  };
};

export const loadParentsSuccess = (loadParent, pagination) => {
  return {
    type: "LOAD_PARENTS_SUCCESS",
    loadParent,
    pagination,
  };
};

export const loadParentsError = (error) => {
  return {
    type: "LOAD_PARENTS_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_PAGINATION",
    pagination,
  };
};

export const deleteMultParent = (ids) => {
  return function (dispatch) {
    dispatch(deleteMultStart());
    axios
      .delete("partners/delete", { params: { id: ids } })
      .then((response) => {
        const deleteParent = response.data.data;
        dispatch(deleteParentSuccess(deleteParent));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(deleteParentError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_PARENT_START",
  };
};

export const deleteParentSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_PARENT_SUCCESS",
    deleteParent: deleteData,
  };
};

export const deleteParentError = (error) => {
  return {
    type: "DELETE_MULT_PARENT_ERROR",
    error,
  };
};

// GET PARENT

export const getParent = (id) => {
  return function (dispatch, getState) {
    dispatch(getParentStart());
    axios
      .get("partners/" + id)
      .then((response) => {
        const parent = response.data.data;
        dispatch(getParentSuccess(parent));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(getParentError(resError));
      });
  };
};

export const getParentStart = () => {
  return {
    type: "GET_PARENT_START",
  };
};

export const getParentSuccess = (parent) => {
  return {
    type: "GET_PARENT_SUCCESS",
    singleParent: parent,
  };
};

export const getParentError = (error) => {
  return {
    type: "GET_PARENT_ERROR",
    error,
  };
};

//UPDATE PARENT

export const updateParent = (id, data) => {
  return function (dispatch) {
    dispatch(updateParentStart());
    axios
      .put(`partners/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updateParentSuccess(result));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(updateParentError(resError));
      });
  };
};

export const updateParentStart = () => {
  return {
    type: "UPDATE_PARENT_START",
  };
};

export const updateParentSuccess = (result) => {
  return {
    type: "UPDATE_PARENT_SUCCESS",
    updateParent: result,
  };
};

export const updateParentError = (error) => {
  return {
    type: "UPDATE_PARENT_ERROR",
    error,
  };
};

export const getCountParent = () => {
  return function (dispatch) {
    dispatch(getCountParentStart());
    axios
      .get(`partners/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountParentSuccess(result));
      })
      .catch((error) => {
        let resError = "Алдаа гарлаа дахин оролдож үзнэ үү";

        if (resError) {
          resError = error.message;
        }

        if (
          error.response !== undefined &&
          error.response.status !== undefined
        ) {
          resError = error.response.status;
        }
        if (
          error.response !== undefined &&
          error.response.data !== undefined &&
          error.response.data.error !== undefined
        ) {
          resError = error.response.data.error.message;
        }
        dispatch(getCountParentError(resError));
      });
  };
};

export const getCountParentStart = () => {
  return {
    type: "GET_COUNT_PARENT_START",
  };
};

export const getCountParentSuccess = (result) => {
  return {
    type: "GET_COUNT_PARENT_SUCCESS",
    parentCount: result,
  };
};

export const getCountParentError = (error) => {
  return {
    type: "GET_COUNT_PARENT_ERROR",
    error,
  };
};
