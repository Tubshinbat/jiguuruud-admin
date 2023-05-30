const initialState = {
  loading: false,
  error: null,
  success: null,
  onlineCourse: [],
  paginationLast: {},
  onlineCourse: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ONLINE_COURSE":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_ONLINE_COURSES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        onlineCourses: [],
      };

    case "LOAD_ONLINE_COURSES_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineCourses: action.loadOnlineCourses,
      };

    case "LOAD_ONLINE_COURSES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        onlineCourses: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_ONLINE_COURSE_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_COURSE_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_COURSE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        onlineCourse: action.onlineCourse,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ONLINE_COURSE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_ONLINE_COURSE_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ONLINE_COURSE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ONLINE_COURSE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ONLINE_COURSE_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        onlineCourse: {},
      };

    case "GET_ONLINE_COURSE_START":
      return {
        ...state,
        loading: true,
        onlineCourse: {},
        error: null,
      };

    case "GET_ONLINE_COURSE_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineCourse: action.onlinecourse,
        error: null,
      };

    case "GET_ONLINE_COURSE_ERROR":
      return {
        ...state,
        loading: false,
        onlineCourse: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ONLINE_COURSE_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ONLINE_COURSE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ONLINE_COURSE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };
    case "UPDATE_END":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
      };

    // GET COUNT
    case "GET_COUNT_ONLINE_COURSE_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ONLINE_COURSE_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ONLINE_COURSE_ERROR":
      return {
        ...state,
        countLoading: false,
        totalCount: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
