const initialState = {
  loading: false,
  error: null,
  success: null,
  onlineComments: [],
  paginationLast: {},
  onlineComment: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ONLINE_COMMENT":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_ONLINE_COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        onlineComments: [],
      };

    case "LOAD_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineComments: action.loadOnlineComment,
      };

    case "LOAD_ONLINE_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        onlineComments: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_ONLINE_COMMENT_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_COMMENT_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        onlineComment: action.onlineComment,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ONLINE_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_ONLINE_COMMENT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ONLINE_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ONLINE_COMMENT_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        onlineComment: {},
      };

    case "GET_ONLINE_COMMENT_START":
      return {
        ...state,
        loading: true,
        onlineComment: {},
        error: null,
      };

    case "GET_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineComment: action.singleOnlineComment,
        error: null,
      };

    case "GET_ONLINE_COMMENT_ERROR":
      return {
        ...state,
        loading: false,
        onlineComment: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ONLINE_COMMENT_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ONLINE_COMMENT_ERROR":
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
    case "GET_COUNT_ONLINE_COMMENT_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ONLINE_COMMENT_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ONLINE_COMMENT_ERROR":
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
