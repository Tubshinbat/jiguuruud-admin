const initialState = {
  loading: false,
  error: null,
  success: null,
  adsies: [],
  paginationLast: {},
  excelData: [],
  ads: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ADS":
      return {
        ...state,
        error: null,
        success: null,
        adsies: [],
        ads: {},
        excelData: [],
        loading: false,
      };

    case "LOAD_ADSIES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        adsies: [],
      };

    case "LOAD_ADSIES_SUCCESS":
      return {
        ...state,
        loading: false,
        adsies: action.adsies,
      };

    case "LOAD_ADSIES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        adsies: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // EXCEL
    case "GET_ADS_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_ADS_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
        error: null,
        success: null,
      };

    case "GET_ADS_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_ADS_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ADS_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ADS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        ads: action.ads,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ADS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_MULT_ADS_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ADS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ADS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ADS_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        ads: {},
      };

    case "GET_ADS_START":
      return {
        ...state,
        loading: true,
        ads: {},
        error: null,
      };

    case "GET_ADS_SUCCESS":
      return {
        ...state,
        loading: false,
        ads: action.ads,
        error: null,
      };

    case "GET_ADS_ERROR":
      return {
        ...state,
        loading: false,
        ads: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ADS_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ADS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ADS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_ADS_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ADS_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ADS_ERROR":
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
