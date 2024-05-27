import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyDescriptionService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=description&a=list&search=${productId}`)
  }
  capnhatdescription = (id, content) => {
    const sendData = {
      id: id, //id of description
      content: content
    }
    axios.post("http://localhost/BE/?c=description&a=update", sendData).then((result)=>{
      if(result.data){
        console.log("Success update");
      }
      else{
        console.log("Error update");
      }
    });
  }
  xoadescription = (id) => {
    const sendData = {
      id : id 
    }
    axios.post("http://localhost/BE/?c=description&a=delete", sendData).then((result)=>{
      if(result.data){
        console.log("Success delete");
      }
      else{
        console.log("Error delete");
      }
    });
  }
  themdescription = (productID, description) => {
    const sendData = {
      productID : productID ,
      description : description 
    }
    axios.post("http://localhost/BE/?c=description&a=save", sendData).then((result)=>{
      if(result.data){
        console.log("Success delete");
      }
      else{
        console.log("Error delete");
      }
    });
  }
}

export const quanLyDescriptionService = new QuanLyDescriptionService();