import { baseService } from "./baseService";
import axios from 'axios';

// import { GROUPID } from '../util/settings/config'
export class QuanLySanPhamService extends baseService {

    layDanhSachSanPham = () => {
        return this.get(`http://localhost/BE/?c=product&a=list`);
    }

    layThongTinSanPham = (id) => {
        return this.get(`http://localhost/BE/?c=product&a=list&search=${id}`)
    }
    xoaSanPham = (id) => {
        return this.delete(`http://localhost/BE/?c=product&a=delete&id=${id}`)
    }
    timKiemSanPham = (filter) => {
        return this.get(`http://localhost/BE/?c=product&a=list&filter=${filter}`);
    }
    themSanpham = (ptitle, pimg, pprice,pgender, pkind, description, sizes, subImages)=>{
        const sendData = {
            product:{
                ptitle: ptitle,
                pimg: pimg,
                pprice: pprice,
                pgender: pgender,
                pkind: pkind
            },
            sizes: sizes,
            subImages: subImages,
            description: description
        };
        axios
        .post("http://localhost/BE/?c=product&a=save", sendData)
        .then((result) => {
            if (result.data.Status === "Invalid") {
            } else {
                window.location.reload();
            }
        });
    }
    chinhsuasanpham = (id, ptitle, pimg, pprice, pgender,pkind, description)=>{
        const sendData = {
            id: id,
            ptitle: ptitle,
            pimg: pimg,
            pprice: pprice,
            pgender: pgender,
            pkind: pkind,
            description: description
        };
        axios
        .post("http://localhost/BE/?c=product&a=update", sendData)
        .then((result) => {
            if (result.data) {
                console.log("Success update");
            } else {
                console.log("Error update");
            }
        });
    }


    

}

export const quanLySanPhamService = new QuanLySanPhamService();