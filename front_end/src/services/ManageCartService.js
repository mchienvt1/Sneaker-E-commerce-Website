import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyGioHangService extends baseService {
    layDanhSachGioHang = (a_id) => {
        return this.get(`http://localhost/BE/?c=cart&a=list&search=${a_id}`)
    }

    xoaDanhSachGioHang = (p_id, a_id, size) => {
        return this.delete(`http://localhost/BE/?c=cart&a=delete&p_id=${p_id}&a_id=${a_id}&size=${size}`)
    }
    themDanhSachGioHang = (sl, a_id, p_id, size) => {
        formData = {
            sl : sl,
            a_id : a_id,
            p_id : p_id,
            size : size
        }
        return this.post(`http://localhost/BE/?c=cart&a=save`, formData);

    }
    truGioHang = (p_id, a_id, size) => {
        return this.delete(`http://localhost/BE/?c=cart&a=minus&p_id=${p_id}&a_id=${a_id}&size=${size}`);
    }
    congGioHang = (p_id, a_id, size) => {
        return this.put(`http://localhost/BE/?c=cart&a=plus&p_id=${p_id}&a_id=${a_id}&size=${size}`);
    }
    capNhatGioHang = (id, sl, a_id, p_id, size, status) => {
        const sendData = {
            id: id,
            sl: sl,
            a_id: a_id,
            p_id: p_id,
            size: size,
            status: status
        }
        axios.post("http://localhost/BE/?c=cart&a=update", sendData).then((result) => {
            console.log(result)
            if (result.data === 'false') {
                console.log("Cập nhật giỏ hàng thất bại");
            }
            else {
                console.log("Cập nhật giỏ hàng thành công");
            }
        });
    }
}
export const quanLyGioHangService = new QuanLyGioHangService();