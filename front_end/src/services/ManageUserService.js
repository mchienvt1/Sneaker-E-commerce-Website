import { baseService } from "./baseService";
import axios from 'axios';

export class QuanLyUserService extends baseService {
    layDanhSachUser = () => {
        return this.get(`http://localhost/BE/?c=user&a=list`);
    }
    layThongTinUser = (id) => {
        return this.get(`http://localhost/BE/?c=user&a=list&search=${id}`)
    }
    xoaUser = (id) => {
        return this.delete(`http://localhost/BE/?c=user&a=delete&id=${id}`)

    }

    login = (username, password) =>{
        const sendData = {
            taiKhoan: username,
            matKhau: password
        }
        axios.post("http://localhost/BE/login.php", sendData).then((result) => {

            if (result.data.Status === '200') {
                localStorage.setItem("id", result.data.id);
                localStorage.setItem("username", result.data.username);
                localStorage.setItem("role", result.data.role);
                localStorage.setItem("fullname", result.data.fullname);
                localStorage.setItem("email", result.data.email);
                localStorage.setItem("phonenumber", result.data.phonenumber);
            
                var role = localStorage.getItem('role');
                if (role === "user") {
                    window.location.href = "/account";
                } else if (role === "admin") {
                    window.location.href = "/admin";
                }
            } else {
                toast.error("Tên đăng nhập hoặc mật khẩu sai!");
            }

        });
    }
    register_user = (username, password, fullname, email, address, phonenumber) => {
        const sendData = {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            address: address,
            phonenumber: phonenumber
        }
        axios.post("http://localhost/BE/?c=user&a=register", sendData).then((result) => {
            console.log(result)
            if (result.data === 'false') {
                console.log("Tài khoản đã tồn tại");
            }
            else {    
                console.log("Thêm tài khoản thành công");
            }
        });
    }
    update_user = (username, password, fullname, email, address, phonenumber)=>{
        const sendData = {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            address: address,
            phonenumber: phonenumber
        }
        axios.post("http://localhost/BE/?c=user&a=updateInfo", sendData).then((result) => {
            console.log(result)
            if (result.data) {
                console.log("Cập nhật thành công");
            }
            else {    
                console.log("Cập nhật thất bại");
            }
        });
    }
    update_role_user = (username, role)=>{
        const sendData = {
            username: username,
            role: role
        }
        axios.post("http://localhost/BE/?c=user&a=updateRole", sendData).then((result) => {
            console.log(result)
            if (result.data) {
                console.log("Cập nhật thành công");
            }
            else {    
                console.log("Cập nhật thất bại");
            }
        });
    }


}



export const quanLyUserService = new QuanLyUserService();