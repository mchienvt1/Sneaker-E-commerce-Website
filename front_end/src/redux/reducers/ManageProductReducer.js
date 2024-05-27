import { SET_DANH_SACH_SAN_PHAM,
  SET_SAN_PHAM_NAM,
  SET_SAN_PHAM_NAM_HUNTER,
  SET_SAN_PHAM_NAM_SANDAL,
  SET_SAN_PHAM_NAM_THE_THAO,
  SET_SAN_PHAM_NAM_CHAY_BO,
  SET_SAN_PHAM_NAM_DA_BANH,
  SET_SAN_PHAM_NAM_TAY,
  SET_SAN_PHAM_NAM_DEP,
  SET_SAN_PHAM_NU,
  SET_SAN_PHAM_NU_HUNTER,
  SET_SAN_PHAM_NU_GOSTO,
  SET_SAN_PHAM_NU_SANDAL,
  SET_SAN_PHAM_NU_BUP_BE,
  SET_SAN_PHAM_NU_THOI_TRANG,
  SET_SAN_PHAM_NU_CHAY_BO,
  SET_SAN_PHAM_NU_THE_THAO,
  SET_SAN_PHAM_NU_DEP,
  SET_SAN_PHAM_NU_TUI_XACH,
  SET_SAN_PHAM_BE_TRAI,
  SET_SAN_PHAM_BE_TRAI_SANDAL,
  SET_SAN_PHAM_BE_TRAI_THE_THAO,
  SET_SAN_PHAM_BE_TRAI_DEP,
  SET_SAN_PHAM_BE_GAI,
  SET_SAN_PHAM_BE_GAI_BUP_BE,
  SET_SAN_PHAM_BE_GAI_THE_THAO,
  SET_SAN_PHAM_BE_GAI_SANDAL,
  SET_SAN_PHAM_BE_GAI_DEP,
  SET_SAN_PHAM_BE_GAI_TAP_DI,
  SET_SAN_PHAM_ALL,
  SET_CHI_TIET_SAN_PHAM
} from "../actions/Types/ManageProductType";



const stateDefault = {
    arrProduct: [
    ],

    arrProductDefault: [],
    productDetail: []

}

export const QuanLySanPhamReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_SAN_PHAM: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_SAN_PHAM_NAM: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_HUNTER: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "HUNTER");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_SANDAL: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "SANDAL");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_THE_THAO: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_THE_THAO");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_CHAY_BO: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind ===  "GIAY_CHAY_BO");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_DA_BANH: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_DA_BANH");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_TAY: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_TAY");
          return { ...state }
        }
        case SET_SAN_PHAM_NAM_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "DEP");
          return { ...state }
        }
        case SET_SAN_PHAM_NU: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_HUNTER: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU" && product.pkind === "HUNTER");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_GOSTO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU" && product.pkind === "GOSTO");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "SANDAL");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_BUP_BE: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_BUP_BE");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_THOI_TRANG: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_THOI_TRANG");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_CHAY_BO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_CHAY_BO");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_THE_THAO");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "DEP");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_TUI_XACH: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "Túi xách");
          return { ...state }
        }

        case SET_SAN_PHAM_BE_TRAI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_TRAI");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "SANDAL");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "GIAY_THE_THAO");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "DEP");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_BUP_BE: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_BUP_BE");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_THE_THAO");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "SANDAL");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "DEP");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_TAP_DI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_TAP_DI");
          return { ...state }
        } 
       case SET_SAN_PHAM_ALL: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pkind !== undefined && product.pkind !== null && product.pkind !== '');
            return { ...state }
        }
        case SET_CHI_TIET_SAN_PHAM: {

            state.productDetail = action.productDetail;
            return { ...state };

        }

        default: return { ...state }
    }
}