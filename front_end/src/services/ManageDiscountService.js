import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyDiscountService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=discount&a=list&search`)
  }
}

export const quanLyDiscountService = new QuanLyDiscountService();