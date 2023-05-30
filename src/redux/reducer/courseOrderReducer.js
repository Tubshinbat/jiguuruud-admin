const initialState = {
  loading: false,
  error: null,
  success: null,
  courseOrders: [],
  paginationLast: {},
  courseOrder: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_COURSE_ORDER":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_COURSE_ORDERS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        courseOrders: [],
      };

    case "LOAD_COURSE_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        courseOrders: action.loadCourseOrders,
      };

    case "LOAD_COURSE_ORDERS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        courseOrders: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_COURSE_ORDER_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_COURSE_ORDER_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_COURSE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        courseOrder: action.courseOrder,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_COURSE_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_COURSE_ORDER_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_COURSE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_COURSE_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_COURSE_ORDER_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        courseOrder: {},
      };

    case "GET_COURSE_ORDER_START":
      return {
        ...state,
        loading: true,
        courseOrder: {},
        error: null,
      };

    case "GET_COURSE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        courseOrder: action.courseorder,
        error: null,
      };

    case "GET_COURSE_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        courseOrder: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_COURSE_ORDER_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_COURSE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_COURSE_ORDER_ERROR":
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
    case "GET_COUNT_COURSE_ORDER_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_COURSE_ORDER_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_COURSE_ORDER_ERROR":
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
