const initialState = {
  loading: false,
  error: null,
  success: null,
  onlineGroups: [],
  paginationLast: {},
  onlineGroup: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ONLINE_GROUP":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_ONLINE_GROUPS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        onlineGroups: [],
      };

    case "LOAD_ONLINE_GROUPS_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineGroups: action.loadOnlineGroups,
      };

    case "LOAD_ONLINE_GROUPS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        onlineGroups: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_ONLINE_GROUP_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_GROUP_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_ONLINE_GROUP_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        onlineGroup: action.onlineGroup,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_ONLINE_GROUP_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_ONLINE_GROUP_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_ONLINE_GROUP_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_ONLINE_GROUP_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_ONLINE_GROUP_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        onlineGroup: {},
      };

    case "GET_ONLINE_GROUP_START":
      return {
        ...state,
        loading: true,
        onlineGroup: {},
        error: null,
      };

    case "GET_ONLINE_GROUP_SUCCESS":
      return {
        ...state,
        loading: false,
        onlineGroup: action.onlinegroup,
        error: null,
      };

    case "GET_ONLINE_GROUP_ERROR":
      return {
        ...state,
        loading: false,
        onlineGroup: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_ONLINE_GROUP_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_ONLINE_GROUP_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_ONLINE_GROUP_ERROR":
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
    case "GET_COUNT_ONLINE_GROUP_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_ONLINE_GROUP_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_ONLINE_GROUP_ERROR":
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
