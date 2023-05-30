const initialState = {
  loading: false,
  error: null,
  success: null,
  costs: [],
  paginationLast: {},
  excelData: [],
  cost: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_COST":
      return {
        ...state,
        error: null,
        success: null,
        costs: [],
        cost: {},
        excelData: [],
        loading: false,
      };

    case "LOAD_COST_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        costs: [],
      };

    case "LOAD_COST_SUCCESS":
      return {
        ...state,
        loading: false,
        costs: action.costs,
      };

    case "LOAD_COST_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        costs: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // EXCEL
    case "GET_COST_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_COST_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
        error: null,
        success: null,
      };

    case "GET_COST_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_COST_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_COST_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_COST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        cost: action.cost,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_COST_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_MULT_COST_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_COST_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_COST_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_COST_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        cost: {},
      };

    case "GET_COST_START":
      return {
        ...state,
        loading: true,
        cost: {},
        error: null,
      };

    case "GET_COST_SUCCESS":
      return {
        ...state,
        loading: false,
        cost: action.cost,
        error: null,
      };

    case "GET_COST_ERROR":
      return {
        ...state,
        loading: false,
        cost: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_COST_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_COST_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_COST_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_COST_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_COST_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_COST_ERROR":
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
