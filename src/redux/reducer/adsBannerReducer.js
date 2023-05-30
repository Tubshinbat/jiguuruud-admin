const initialState = {
  loading: false,
  error: null,
  success: null,
  adsBanners: [],
  paginationLast: {},
  excelData: [],
  adsBanner: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ADSBANNER":
      return {
        ...state,
        error: null,
        success: null,
        adsBanners: [],
        adsBanner: {},
        excelData: [],
        loading: false,
      };

    case "LOAD_ADSBANNERIES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        adsBanners: [],
      };

    case "LOAD_ADSBANNERIES_SUCCESS":
      return {
        ...state,
        loading: false,
        adsBanners: action.adsBanners,
      };

    case "LOAD_ADSBANNERIES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        adsBanners: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // EXCEL
    case "GET_ADSBANNER_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_ADSBANNER_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
        error: null,
        success: null,
      };

    case "GET_ADSBANNER_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_ADSBANNER_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ADSBANNER_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ADSBANNER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        adsBanner: action.adsBanner,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ADSBANNER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_MULT_ADSBANNER_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ADSBANNER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ADSBANNER_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ADSBANNER_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        adsBanner: {},
      };

    case "GET_ADSBANNER_START":
      return {
        ...state,
        loading: true,
        adsBanner: {},
        error: null,
      };

    case "GET_ADSBANNER_SUCCESS":
      return {
        ...state,
        loading: false,
        adsBanner: action.adsBanner,
        error: null,
      };

    case "GET_ADSBANNER_ERROR":
      return {
        ...state,
        loading: false,
        adsBanner: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ADSBANNER_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ADSBANNER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ADSBANNER_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_ADSBANNER_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ADSBANNER_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ADSBANNER_ERROR":
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
