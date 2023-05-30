const initialState = {
  loading: false,
  error: null,
  success: null,
  costtypes: [],
  paginationLast: {},
  excelData: [],
  costtype: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_COSTTYPE":
      return {
        ...state,
        error: null,
        success: null,
        costtypes: [],
        costtype: {},
        excelData: [],
        loading: false,
      };

    case "LOAD_COST_TYPES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        costtypes: [],
      };

    case "LOAD_COST_TYPES_SUCCESS":
      return {
        ...state,
        loading: false,
        costtypes: action.costtypes,
        success: null,
      };

    case "LOAD_COST_TYPES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        costtypes: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // EXCEL
    case "GET_COSTTYPE_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_COSTTYPE_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
        error: null,
        success: null,
      };

    case "GET_COSTTYPE_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_COSTTYPE_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_COST_TYPE_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_COST_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        costtype: action.costtype,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_COST_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_COST_TYPE_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_COST_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_COST_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_COSTTYPE_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        costtype: {},
      };

    case "LOAD_COST_TYPE_START":
      return {
        ...state,
        loading: true,
        costtype: {},
        error: null,
      };

    case "LOAD_COST_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        costtype: action.costtype,
        error: null,
      };

    case "LOAD_COST_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        costtype: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_COST_TYPE_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_COST_TYPE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_COST_TYPE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_COSTTYPE_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_COSTTYPE_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_COSTTYPE_ERROR":
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
