import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLySubImageService extends baseService {

  laySubImagetheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=subImage&a=list&search=${productId}`)
  }
  capnhatSubImage = (id, img) =>{
    const sendData = {
      id: id,
      img: img
    }
    axios.post("http://localhost/BE/?c=subImage&a=update", sendData).then((result)=>{
      if(result.data){
        console.log("Success update");
      }
      else{
        console.log("Error update");
      }
    });
  }
  xoaSubImage = (id) => {
    const sendData = {
      id : id 
    }
    axios.post("http://localhost/BE/?c=subImage&a=delete", sendData).then((result)=>{
      if(result.data){
        console.log("Success delete");
      }
      else{
        console.log("Error delete");
      }
    });
  }
  themSubImage = (productID, img) => {
    const sendData = {
      productID : productID,
      img : img
    }
    axios.post("http://localhost/BE/?c=subImage&a=save", sendData).then((result)=>{
      if(result.data){
        console.log("Success add");
      }
      else{
        console.log("Error add");
      }
    });
  }


}

export const quanLyDescriptionService = new QuanLyDescriptionService();