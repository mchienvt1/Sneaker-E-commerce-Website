import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyNewProductService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=newProduct&a=list&search`)
  }
}

export const quanLyNewProductService = new QuanLyNewProductService();