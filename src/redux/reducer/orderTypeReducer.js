const initialState = {
  loading: false,
  error: null,
  success: null,
  orderTypes: [],
  paginationLast: {},
  orderType: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ORDER_TYPE":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_ORDER_TYPES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        orderTypes: [],
      };

    case "LOAD_ORDER_TYPES_SUCCESS":
      return {
        ...state,
        loading: false,
        orderTypes: action.loadOrderTypes,
      };

    case "LOAD_ORDER_TYPES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        orderTypes: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_ORDER_TYPE_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ORDER_TYPE_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ORDER_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        orderType: action.orderType,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ORDER_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_ORDER_TYPE_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ORDER_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ORDER_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ORDER_TYPE_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        orderType: {},
      };

    case "GET_ORDER_TYPE_START":
      return {
        ...state,
        loading: true,
        orderType: {},
        error: null,
      };

    case "GET_ORDER_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        orderType: action.ordertype,
        error: null,
      };

    case "GET_ORDER_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        orderType: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ORDER_TYPE_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ORDER_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ORDER_TYPE_ERROR":
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
    case "GET_COUNT_ORDER_TYPE_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ORDER_TYPE_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderTypeCount,
        error: null,
      };
    case "GET_COUNT_ORDER_TYPE_ERROR":
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
