const initialState = {
  loading: false,
  error: null,
  success: null,
  parents: [],
  paginationLast: {},
  parent: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_PARENT":
      return {
        ...state,
        error: null,
        success: null,
        loading: false,
      };

    case "LOAD_PARENTS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        parents: [],
      };

    case "LOAD_PARENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        parents: action.loadParent,
      };

    case "LOAD_PARENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        parents: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE

    case "CREATE_PARENT_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_PARENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        success: "Амжилттай нэмэгдлээ",
      };

    case "CREATE_PARENT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "DELETE_MULT_PARENT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };

    case "DELETE_MULT_PARENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };

    case "DELETE_MULT_PARENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET

    case "GET_PARENT_START":
      return {
        ...state,
        loading: true,
        parent: {},
        error: null,
      };

    case "GET_PARENT_SUCCESS":
      return {
        ...state,
        loading: false,
        parent: action.singleParent,
        error: null,
      };

    case "GET_PARENT_ERROR":
      return {
        ...state,
        loading: false,
        parent: {},
        error: action.error,
      };

    //UPDATE
    case "UPDATE_PARENT_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };

    case "UPDATE_PARENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Компаний мэдэээлэл амжилттай шинэчлэгдлээ",
        error: null,
      };

    case "UPDATE_PARENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET COUNT
    case "GET_COUNT_PARENT_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_PARENT_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.parentCount,
        error: null,
      };
    case "GET_COUNT_PARENT_ERROR":
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
