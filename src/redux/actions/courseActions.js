import axios from "../../axios-base";

export const clear = () => {
  return {
    type: "CLEAR_COURSE",
  };
};

// CREATE COURSE

export const createCourse = (data) => {
  return function (dispatch) {
    dispatch(createCourseStart());
    axios
      .post("courses", data)
      .then((response) => {
        const data = response.data.data;
        dispatch(createCourseSuccess(data));
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
        dispatch(createCourseError(resError));
      });
  };
};

const createCourseStart = () => {
  return {
    type: "CREATE_COURSE_START",
  };
};

const createCourseSuccess = () => {
  return {
    type: "CREATE_COURSE_SUCCESS",
  };
};

const createCourseError = (error) => {
  return {
    type: "CREATE_COURSE_ERROR",
    error,
  };
};

// LOAD COURSES

export const loadCourses = (query = "") => {
  return function (dispatch) {
    dispatch(loadCoursesStart());
    axios
      .get("courses?" + query)
      .then((response) => {
        const loadCourses = response.data.data;
        const pagination = response.data.pagination;
        dispatch(loadCoursesSuccess(loadCourses));
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
        dispatch(loadCoursesError(resError));
      });
  };
};

export const loadCoursesStart = () => {
  return {
    type: "LOAD_COURSES_START",
  };
};

export const loadCoursesSuccess = (loadCourses, pagination) => {
  return {
    type: "LOAD_COURSES_SUCCESS",
    loadCourses,
    pagination,
  };
};

export const loadCoursesError = (error) => {
  return {
    type: "LOAD_COURSES_ERROR",
    error,
  };
};

export const loadPagination = (pagination) => {
  return {
    type: "LOAD_PAGINATION",
    pagination,
  };
};

// DELETE MULT

export const deleteMultCourse = (ids) => {
  return function (dispatch) {
    dispatch(deleteMultStart());
    axios
      .delete("courses/delete", { params: { id: ids } })
      .then((response) => {
        const deleteCourse = response.data.data;
        dispatch(deleteCourseSuccess(deleteCourse));
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
        dispatch(deleteCourseError(resError));
      });
  };
};

export const deleteMultStart = () => {
  return {
    type: "DELETE_MULT_COURSE_START",
  };
};

export const deleteCourseSuccess = (deleteData) => {
  return {
    type: "DELETE_MULT_COURSE_SUCCESS",
    deleteCourse: deleteData,
  };
};

export const deleteCourseError = (error) => {
  return {
    type: "DELETE_MULT_COURSE_ERROR",
    error,
  };
};

// GET COURSE

export const getInit = () => {
  return {
    type: "GET_COURSE_INIT",
  };
};

export const getCourse = (id) => {
  return function (dispatch) {
    dispatch(getCourseStart());
    axios
      .get("courses/" + id)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCourseSuccess(result));
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
        dispatch(getCourseError(resError));
      });
  };
};

export const getCourseStart = () => {
  return {
    type: "GET_COURSE_START",
  };
};

export const getCourseSuccess = (result) => {
  return {
    type: "GET_COURSE_SUCCESS",
    course: result,
  };
};

export const getCourseError = (error) => {
  return {
    type: "GET_COURSE_ERROR",
    error,
  };
};

//UPDATE COURSE

export const updateCourse = (id, data) => {
  return function (dispatch) {
    dispatch(updateCourseStart());
    axios
      .put(`courses/${id}`, data)
      .then((response) => {
        const result = response.data;
        dispatch(updateCourseSuccess(result));
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
        dispatch(updateCourseError(resError));
      });
  };
};

export const updateCourseStart = () => {
  return {
    type: "UPDATE_COURSE_START",
  };
};

export const updateCourseSuccess = (result) => {
  return {
    type: "UPDATE_COURSE_SUCCESS",
    updateCourse: result,
  };
};

export const updateCourseError = (error) => {
  return {
    type: "UPDATE_COURSE_ERROR",
    error,
  };
};

export const getCountCourse = () => {
  return function (dispatch) {
    dispatch(getCountCourseStart());
    axios
      .get(`courses/count`)
      .then((response) => {
        const result = response.data.data;
        dispatch(getCountCourseSuccess(result));
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
        dispatch(getCountCourseError(resError));
      });
  };
};

export const getCountCourseStart = () => {
  return {
    type: "GET_COUNT_COURSE_START",
  };
};

export const getCountCourseSuccess = (result) => {
  return {
    type: "GET_COUNT_COURSE_SUCCESS",
    orderCount: result,
  };
};

export const getCountCourseError = (error) => {
  return {
    type: "GET_COUNT_COURSE_ERROR",
    error,
  };
};
