const initialState = {
  loading: false,
  error: null,
  success: null,
  Platforms: [],
  paginationLast: {},
  excelData: [],
  platform: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_PLATFORM":
      return {
        ...state,
        error: null,
        success: null,
        Platforms: [],
        platform: {},
        excelData: [],
        loading: false,
      };

    case "LOAD_PLATFORMS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        platforms: [],
      };

    case "LOAD_PLATFORMS_SUCCESS":
      return {
        ...state,
        loading: false,
        platforms: action.platforms,
      };

    case "LOAD_PLATFORM_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        Platforms: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // EXCEL
    case "GET_PLATFORM_EXCELDATA_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        excelData: [],
      };

    case "GET_PLATFORM_EXCELDATA_SUCCESS":
      return {
        ...state,
        loading: false,
        excelData: action.excel,
        error: null,
        success: null,
      };

    case "GET_PLATFORM_EXCELDATA_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
        excelData: [],
      };

    // SAVE
    case "CREATE_PLATFORM_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_PLATFORM_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_PLATFORM_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        platform: action.platform,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_PLATFORM_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_MULT_PLATFORM_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_PLATFORM_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_PLATFORM_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_PLATFORM_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        platform: {},
      };

    case "GET_PLATFORM_START":
      return {
        ...state,
        loading: true,
        platform: {},
        error: null,
      };

    case "GET_PLATFORM_SUCCESS":
      return {
        ...state,
        loading: false,
        platform: action.platform,
        error: null,
      };

    case "GET_PLATFORM_ERROR":
      return {
        ...state,
        loading: false,
        platform: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_PLATFORM_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_PLATFORM_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_PLATFORM_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_PLATFORM_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_PLATFORM_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_PLATFORM_ERROR":
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
