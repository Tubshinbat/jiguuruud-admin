const initialState = {
  loading: false,
  success: null,
  error: null,
  employees: [],
  paginationLast: {},
  employee: {},
  //count
  countLoading: false,
  totalCount: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_EMPLOYEE":
      return {
        ...state,
        error: null,
        success: null,
        employee: {},
      };

    case "LOAD_EMPLOYEES_START":
      return {
        ...state,
        loading: true,
        error: null,
        suceess: null,
        employees: [],
      };

    case "LOAD_EMPLOYEES_SUCCESS":
      return {
        ...state,
        loading: false,
        employees: action.loadEmployees,
      };

    case "LOAD_EMPLOYEES_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        employees: [],
        error: action.error,
      };

    case "LOAD_PAGINATION":
      return {
        ...state,
        paginationLast: action.pagination,
      };

    // CREATE EMPLOYEE

    case "CREATE_EMPLOYEE_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
        employee: null,
      };
    case "CREATE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай  нэмэгдлээ",
        error: null,
      };
    case "CREATE_EMPLOYEE_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
        success: null,
      };

    // DELETE
    case "DELETE_MULT_EMPLOYEE_START":
      return {
        ...state,
        loading: true,
        success: null,
        error: null,
      };
    case "DELETE_MULT_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Амжилттай устгагдлаа",
        error: null,
      };
    case "DELETE_MULT_EMPLOYEE_ERROR":
      return {
        ...state,
        loading: false,
        success: null,
        error: action.error,
      };

    // GET EMPLOYEE

    case "GET_EMPLOYEE_INIT":
      return {
        ...state,
        loading: false,
        success: null,
        error: null,
        employee: {},
      };

    case "GET_EMPLOYEE_START":
      return {
        ...state,
        loading: true,
        employee: {},
        error: null,
      };

    case "GET_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        employee: action.employee,
        error: null,
      };

    case "GET_EMPLOYEE_ERROR":
      return {
        ...state,
        loading: false,
        employee: {},
        error: action.error,
      };

    //UPDATE

    case "UPDATE_EMPLOYEE_START":
      return {
        ...state,
        success: null,
        loading: true,
        error: null,
      };
    case "UPDATE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: "Мэдээллийг амжилттай шинэчлэгдлээ",
        error: null,
      };
    case "UPDATE_EMPLOYEE_ERROR":
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
    case "GET_COUNT_EMPLOYEE_START":
      return {
        ...state,
        countLoading: true,
        totalCount: null,
        error: null,
      };
    case "GET_COUNT_EMPLOYEE_SUCCESS":
      return {
        ...state,
        coutLoading: false,
        totalCount: action.orderCount,
        error: null,
      };
    case "GET_COUNT_EMPLOYEE_ERROR":
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
