const initialState = {
  loading: false,
  error: null,
  success: null,
  orders: [],
  paginationLast: {},
  order: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ORDER":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_ORDERS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        orders: [],
      };

    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.loadOrders,
      };

    case "LOAD_ORDERS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        orders: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_ORDER_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ORDER_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        order: action.order,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_ORDER_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ORDER_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        order: {},
      };

    case "GET_ORDER_START":
      return {
        ...state,
        loading: true,
        order: {},
        error: null,
      };

    case "GET_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        order: action.order,
        error: null,
      };

    case "GET_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        order: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ORDER_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ORDER_ERROR":
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
    case "GET_COUNT_ORDER_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ORDER_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ORDER_ERROR":
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
