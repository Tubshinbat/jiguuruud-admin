const initialState = {
  loading: false,
  success: null,
  error: null,
  contents: [],
  paginationLast: {},
  content: {},
  //count
  countLoading: false,
  totalCount: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CONTENT":
      return {
        ...state,
        error: null,
        success: null,
        content: {},
      };

    case "LOAD_CONTENTS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        contents: [],
      };

    case "LOAD_CONTENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        contents: action.loadContents,
      };

    case "LOAD_CONTENTS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        contents: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // CREATE CONTENT

    case "CREATE_CONTENT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        content: null,
      };
    case "CREATE_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай баннер нэмэгдлээ",
        error: null,
      };
    case "CREATE_CONTENT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    // DELETE
    case "DELETE_MULT_CONTENT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_CONTENT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET CONTENT

    case "GET_CONTENT_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        content: {},
      };

    case "GET_CONTENT_START":
      return {
        ...state,
        loading: true,
        content: {},
        error: null,
      };

    case "GET_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        content: action.content,
        error: null,
      };

    case "GET_CONTENT_ERROR":
      return {
        ...state,
        loading: false,
        content: {},
        error: action.error,
      };

    //UPDATE

    case "UPDATE_CONTENT_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_CONTENT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_CONTENT_ERROR":
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
    case "GET_COUNT_CONTENT_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_CONTENT_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_CONTENT_ERROR":
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
