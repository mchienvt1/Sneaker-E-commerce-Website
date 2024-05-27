import { SET_DANH_SACH_GIO_HANG, SET_XOA_GIO_HANG } from "../actions/Types/ManageCartType";




const stateDefault = {
    arrProduct: []
}

export const GioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_GIO_HANG: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_XOA_GIO_HANG: {

            return { ...state }
        }
  
        default: return { ...state }
    }
}