import { baseService } from "./baseService";
import axios from 'axios';

// import { GROUPID } from '../util/settings/config'
export class QuanLySizeService extends baseService {

  laysizetheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=size&a=list&search=${productId}`)
  }
  themluongsanphamtheosize = (id, sl) => {
    return this.get(`http://localhost/BE/?c=size&a=add&id=${id}&sl=${sl}`);
  }
  giamluongsanphamtheosize = (id, sl) => {
    return this.get(`http://localhost/BE/?c=size&a=minus&id=${id}&sl=${sl}`);
  }
  themSizemoi = (productID, soluong, size)=>{
    const sendData = {
      productID: productID,
      soluong: soluong,
      size: size,
    };
    axios
    .post(" ", sendData)
    .then((result) => {

    });
  }

  capnhatSize = (id, productID, soluong, size) => {
    const sendData = {
      id : id, 
      productID: productID,
      soluong: soluong,
      size: size,
    };
    // return this.get(`http://localhost/BE/?c=size&a=update&productID=${productID}&size=${size}&sl=${sl}`);
    axios
      .post("http://localhost/BE/?c=size&a=update", sendData);
  }

  xoaSize = (id) => {
    return this.delete(`http://localhost/BE/?c=size&a=delete&id=${id}`);
  }

}

export const quanLySizeService = new QuanLySizeService();