
import { SET_DANH_SACH_GIO_HANG } from "./Types/ManageCartType";
import { quanLyGioHangService } from "../../services/ManageCartService";

export const layDanhSachGioHangAction = (a_id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyGioHangService.layDanhSachGioHang(a_id);
            console.log("danh sach gio hang ne anh ban: ", result.data);
            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_GIO_HANG,
                arrProduct: result.data,
                
            })
        
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const xoaDanhSachGioHangAction = (p_id, a_id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyGioHangService.xoaDanhSachGioHang(p_id, a_id);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch(layDanhSachGioHangAction(a_id))
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const themDanhSachGioHangAction = (formData, a_id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            // console.log("Them gio hang: ", formData);
            const result = await quanLyGioHangService.themDanhSachGioHang(formData);
            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch(layDanhSachGioHangAction(a_id))

        } catch (errors) {
            console.log('errors', errors)
        }
    };

}
export const truGioHangAction = (p_id, a_id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo

            const result = await quanLyGioHangService.truGioHang(p_id, a_id);


            dispatch(layDanhSachGioHangAction(a_id))
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const congGioHangAction = (p_id, a_id) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo

            const result = await quanLyGioHangService.congGioHang(p_id, a_id);
            dispatch(layDanhSachGioHangAction(a_id))
            return result;
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}


