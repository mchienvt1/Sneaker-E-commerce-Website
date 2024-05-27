import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyOutStandingService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=outStanding&a=list&search`)
  }
}

export const quanLyOutStandingService = new QuanLyOutStandingService();