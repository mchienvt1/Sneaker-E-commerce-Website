import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyCommentService extends baseService {
    layDanhSachComment = (productId) => {
        return this.get(`http://localhost/BE/?c=comment&a=list&search=${productId}`)
    }
    xoaComment = (id) => {
        return this.delete(`http://localhost/BE/?c=comment&a=delete&id=${id}`)
    }
    themComment = (a_id, p_id, comment) => {
        sendData = {
            a_id : a_id,
            p_id : p_id, 
            comment : comment
        }
        axios
        .post("http://localhost/BE/?c=comment&a=save", sendData)
        .then((result) => {
            if (result.data) {
                console.log("Success add comment");
            } else {
                console.log("Error add comment");
            }
        });
    }

}

export const quanLyCommentService = new QuanLyCommentService();