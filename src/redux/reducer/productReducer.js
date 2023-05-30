const initialState = {
  loading: false,
  error: null,
  success: null,
  products: [],
  paginationLast: {},
  product: {},
  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_PRODUCT":
      return {
        ...state,
        error: null,
        success: null,
      };

    case "LOAD_PRODUCTS_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        products: [],
      };

    case "LOAD_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.loadProducts,
      };

    case "LOAD_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        products: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };
    // SAVE
    case "CREATE_PRODUCT_INIT":
      return {
        ...state,
        loading: false,
        error: null,
        success: null,
      };

    case "CREATE_PRODUCT_START":
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case "CREATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        product: action.product,
        success: "Амжилттай нэмэгдлээ",
      };
    case "CREATE_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "DELETE_MULT_PRODUCT_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    //GET
    case "GET_PRODUCT_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        product: {},
      };

    case "GET_PRODUCT_START":
      return {
        ...state,
        loading: true,
        product: {},
        error: null,
      };

    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.product,
        error: null,
      };

    case "GET_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        product: {},
        error: action.error,
      };
    //UPDATE
    case "UPDATE_PRODUCT_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_PRODUCT_ERROR":
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
    case "GET_COUNT_PRODUCT_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_PRODUCT_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.productCount,
        error: null,
      };
    case "GET_COUNT_PRODUCT_ERROR":
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
