import axios from "../../axios-base";
//UPDOWN

export const upDown = (data) => {
  return function (dispatch, getState) {
    dispatch(upDownStart());
    axios
      .put("coursecategory/updown", data)
      .then((response) => {
        const result = response.data.data;
        dispatch(upDownSuccess(result));
        dispatch(loadCategories());
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
        dispatch(upDownError(resError));
      });
  };
};

export const upDownStart = () => {
  return {
    type: "CATEGORY_UPDOWN_START",
  };
};

export const upDownSuccess = () => {
  return {
    type: "CATEGORY_UPDOWN_SUCCESS",
  };
};

export const upDownError = (error) => {
  return {
    type: "CATEGORY_UPDOWN_ERROR",
    error,
  };
};

// LOAD CATEGORIES

export const loadCategories = () => {
  return function (dispatch, getState) {
    dispatch(loadCategoriesStart());
    axios
      .get("coursecategory")
      .then((response) => {
        const result = response.data.data.reverse();
        dispatch(loadCategoriesSuccess(result));
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
        dispatch(loadCategoriesError(resError));
      });
  };
};
export const loadCategoriesStart = () => {
  return {
    type: "LOAD_CATEGORIES_START",
  };
};

export const loadCategoriesSuccess = (result) => {
  return {
    type: "LOAD_CATEGORIES_SUCCESS",
    categories: result,
  };
};

export const loadCategoriesError = (error) => {
  return {
    type: "LOAD_CATEGORIES_ERROR",
    error,
  };
};

export const getCategory = (id) => {
  return function (dispatch, getState) {
    dispatch(getCategoryStart());
    axios
      .get(`coursecategory/${id}`)
      .then((response) => {
        const loadedNewsCategory = response.data.data;
        dispatch(getCategorySuccess(loadedNewsCategory));
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
        dispatch(getCategoryError(resError));
      });
  };
};

export const getCategoryStart = () => {
  return {
    type: "GET_CATEGORY_START",
  };
};

export const getCategorySuccess = (result) => {
  return {
    type: "GET_CATEGORY_SUCCESS",
    category: result,
  };
};

export const getCategoryError = (error) => {
  return {
    type: "GET_CATEGORY_ERROR",
    error,
  };
};

// DELETE CATEGORY

export const deleteCategory = (id) => {
  return function (dispatch, getState) {
    dispatch(deleteCategoryStart());

    axios
      .delete(`coursecategory/${id}`)
      .then((response) => {
        const resultCategory = response.data.data;
        dispatch(deleteCategorySuccess(resultCategory));
        dispatch(loadCategories());
        dispatch(getCategory());
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
        dispatch(deleteCategoryError(resError));
      });
  };
};

export const deleteCategoryStart = () => {
  return {
    type: "DELETE_CATEGORY_START",
  };
};

export const deleteCategorySuccess = (result) => {
  return {
    type: "DELETE_CATEGORY_SUCCESS",
    dlCategory: result,
  };
};

export const deleteCategoryError = (error) => {
  return {
    type: "DELETE_CATEGORY_ERROR",
    error,
  };
};

// SAVE CATEGORY

export const saveCategory = (category) => {
  return function (dispatch, getState) {
    dispatch(saveCategoryStart());
    let data = {
      name: category.name,
      status: category.status,
      isModel: category.isModel,
      isDirect: category.isDirect,
      direct: category.direct,
    };

    if (category.parentId !== null) {
      data = {
        name: category.name,
        parentId: category.parentId,
        status: category.status,
        isModel: category.isModel,
        isDirect: category.isDirect,
        direct: category.direct,
      };
    }

    if (category.model !== null || category.model !== "") {
      data.model = category.model;
    }
    axios
      .post(`coursecategory`, data)
      .then((response) => {
        const resultCategory = response.data.data;

        dispatch(saveCategorySuccess(resultCategory));
        dispatch(loadCategories());
        dispatch(getCategory(resultCategory._id));
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
        dispatch(saveCategoryError(resError));
      });
  };
};

export const saveCategoryStart = () => {
  return {
    type: "CREATE_CATEGORY_START",
  };
};

export const saveCategorySuccess = (resultCategory) => {
  return {
    type: "CREATE_CATEGORY_SUCCESS",
    category: resultCategory,
  };
};

export const saveCategoryError = (error) => {
  return {
    type: "CREATE_CATEGORY_ERROR",
    error: error,
  };
};

// UPDATE CATEGORY

export const updateCategory = (category, id) => {
  return function (dispatch) {
    dispatch(updateCategoryStart());
    const data = {
      name: category.name,
      status: category.status,
      isModel: category.isModel,
      isDirect: category.isDirect,
      direct: category.direct,
    };
    if (category.model !== null || category.model !== "") {
      data.model = category.model;
    }

    axios
      .put(`coursecategory/${id}`, data)
      .then((response) => {
        const resultCategory = response.data.data;
        dispatch(updateCategorySuccess(resultCategory));
        dispatch(loadCategories());
        dispatch(getCategory(id));
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
        dispatch(updateCategoryError(resError));
      });
  };
};

export const updateCategoryStart = () => {
  return {
    type: "UPDATE_CATEGORY_START",
  };
};

export const updateCategorySuccess = (resultCategory) => {
  return {
    type: "UPDATE_CATEGORY_SUCCESS",
    category: resultCategory,
  };
};

export const updateCategoryError = (error) => {
  return {
    type: "UPDATE_CATEGORY_ERROR",
    error: error,
  };
};

// Count Category
export const getCountCategory = () => {
  return function (dispatch) {
    dispatch(getCountCategoryStart());

    axios
      .get(`coursecategory/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountCategorySuccess(result));
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
        dispatch(getCountCategoryError(resError));
      });
  };
};

export const getCountCategoryStart = () => {
  return {
    type: "GET_COUNT_CATEGORY_START",
  };
};

export const getCountCategorySuccess = (result) => {
  return {
    type: "GET_COUNT_CATEGORY_SUCCESS",
    orderCount: result,
  };
};

export const getCountCategoryError = (error) => {
  return {
    type: "GET_COUNT_CATEGORY_ERROR",
    error,
  };
};
