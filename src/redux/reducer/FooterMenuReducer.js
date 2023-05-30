const initialState = {
  loading: false,
  error: null,
  success: null,
  menus: [],
  paginationLast: {},

  selectData: {
    singleLoad: false,
    category: {
      _id: "",
    },
  },

  //count
  countLoading: false,
  totalCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_FOOTER_MENUS_START":
      return {
        ...state,
        loading: true,
        menus: [],
        error: null,
      };

    case "LOAD_FOOTER_MENUS_SUCCESS":
      return {
        ...state,
        menus: action.menus,
        loading: false,
        error: null,
      };

    case "LOAD_FOOTER_MENUS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        menus: [],
      };

    // Single category
    case "GET_FOOTER_MENU_START":
      return {
        ...state,
        loading: true,
        error: null,
        selectData: {
          category: {
            _id: "",
          },
        },
      };
    case "GET_FOOTER_MENU_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        selectData: {
          ...state.selectData,
          category: action.menu,
        },
      };
    case "GET_FOOTER_MENU_ERROR":
      return {
        ...state,
        error: action.error,
        success: null,
        selectData: {
          ...state.selectData,
        },
      };

    // save travel category
    case "CREATE_FOOTER_MENU_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "CREATE_FOOTER_MENU_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай шинэ цэс нэмэгдлээ",
        error: null,
      };
    case "CREATE_FOOTER_MENU_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };
    case "DELETE_FOOTER_MENU_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_FOOTER_MENU_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай цэсийг устгаллаа",
        error: null,
      };
    case "DELETE_FOOTER_MENU_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
        success: null,
      };

    // Update
    case "UPDATE_FOOTER_MENU_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "UPDATE_FOOTER_MENU_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай цэсний солигдлоо",
        error: null,
      };
    case "UPDATE_FOOTER_MENU_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    case "GET_COUNT_FOOTER_MENU_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_FOOTER_MENU_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_FOOTER_MENU_ERROR":
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
