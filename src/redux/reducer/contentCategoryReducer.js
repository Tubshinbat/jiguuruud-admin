const initialState = {
  loading: false,
  success: null,
  error: null,
  contentCategories: [],
  paginationLast: {},
  contentCategory: {},
  //count
  countLoading: false,
  totalCount: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CONTENT_CATEGORY":
      return {
        ...state,
        error: null,
        success: null,
        contentCategory: {},
      };

    case "LOAD_CONTENT_CATEGORIES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        contentCategories: [],
      };

    case "LOAD_CONTENT_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        contentCategories: action.loadCategories,
      };

    case "LOAD_CONTENT_CATEGORIES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        contentCategories: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // CREATE CONTENT_CATEGORY

    case "CREATE_CONTENT_CATEGORY_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        contentCategory: null,
      };
    case "CREATE_CONTENT_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай баннер нэмэгдлээ",
        error: null,
      };
    case "CREATE_CONTENT_CATEGORY_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    // DELETE
    case "DELETE_MULT_CONTENT_CATEGORY_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_CONTENT_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_CONTENT_CATEGORY_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET CONTENT_CATEGORY

    case "GET_CONTENT_CATEGORY_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        contentCategory: {},
      };

    case "GET_CONTENT_CATEGORY_START":
      return {
        ...state,
        loading: true,
        contentCategory: {},
        error: null,
      };

    case "GET_CONTENT_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        contentCategory: action.contentCategory,
        error: null,
      };

    case "GET_CONTENT_CATEGORY_ERROR":
      return {
        ...state,
        loading: false,
        contentCategory: {},
        error: action.error,
      };

    //UPDATE

    case "UPDATE_CONTENT_CATEGORY_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_CONTENT_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_CONTENT_CATEGORY_ERROR":
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
    case "GET_COUNT_CONTENT_CATEGORY_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_CONTENT_CATEGORY_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_CONTENT_CATEGORY_ERROR":
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
