import ProductType from '../../redux/actions/Types/ManageProductType'
const decodeCollectionNameToProductType = (collectionName) => {
  let action = undefined;
  switch (collectionName) {
    case 'nam':
      action = { type: ProductType.SET_SAN_PHAM_NAM };
      break;
    case 'nam-hunter':
      action = { type: ProductType.SET_SAN_PHAM_NAM_HUNTER };
      break;
    case 'nam-sandal':
      action = { type: ProductType.SET_SAN_PHAM_NAM_SANDAL };
      break;
    case 'nam-the-thao':
      action = { type: ProductType.SET_SAN_PHAM_NAM_THE_THAO };
      break;
    case 'nam-chay-bo':
      action = { type: ProductType.SET_SAN_PHAM_NAM_CHAY_BO };
      break;
    case 'nam-da-banh':
      action = { type: ProductType.SET_SAN_PHAM_NAM_DA_BANH };
      break;
    case 'nam-tay':
      action = { type: ProductType.SET_SAN_PHAM_NAM_TAY };
      break;
    case 'nam-dep':
      action = { type: ProductType.SET_SAN_PHAM_NAM_DEP };
      break;
    case 'nu':
      action = { type: ProductType.SET_SAN_PHAM_NU };
      break;
    case 'nu-hunter':
      action = { type: ProductType.SET_SAN_PHAM_NU_HUNTER };
      break;
    case 'nu-sandal':
      action = { type: ProductType.SET_SAN_PHAM_NU_SANDAL };
      break;
    case 'nu-bup-be':
      action = { type: ProductType.SET_SAN_PHAM_NU_BUP_BE };
      break;
    case 'nu-thoi-trang':
      action = { type: ProductType.SET_SAN_PHAM_NU_THOI_TRANG };
      break;
    case 'nu-chay-bo':
      action = { type: ProductType.SET_SAN_PHAM_NU_CHAY_BO };
      break;
    case 'nu-the-thao':
      action = { type: ProductType.SET_SAN_PHAM_NU_THE_THAO };
      break;
    case 'nu-dep':
      action = { type: ProductType.SET_SAN_PHAM_NU_DEP };
      break;
    
    case 'be-trai':
      action = { type: ProductType.SET_SAN_PHAM_BE_TRAI };
      break;
    case 'be-trai-sandal':
      action = { type: ProductType.SET_SAN_PHAM_BE_TRAI_SANDAL };
      break;
    case 'be-trai-the-thao':
      action = { type: ProductType.SET_SAN_PHAM_BE_TRAI_THE_THAO };
      break;
    case 'be-trai-dep':
      action = { type: ProductType.SET_SAN_PHAM_BE_TRAI_DEP };
      break;
    case 'be-gai':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI };
      break;
    case 'be-gai-bup-be':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI_BUP_BE };
      break;
    case 'be-gai-the-thao':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI_THE_THAO };
      break;
    case 'be-gai-sandal':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI_SANDAL };
      break;
    case 'be-gai-dep':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI_DEP };
      break;
    case 'be-gai-tap-di':
      action = { type: ProductType.SET_SAN_PHAM_BE_GAI_TAP_DI };
      break;
    // default:
    //   action = { type: ProductType.SET_SAN_PHAM_ALL };
    //   break;
  }
  return action;

}  

export const filterProducts = (arrProductDefault, collectionName) => {
  const action = decodeCollectionNameToProductType(collectionName);
  if (!action) return [];
  let arrProduct;
  switch (action.type) {
      // case ProductType.SET_DANH_SACH_SAN_PHAM: {
      //     arrProduct = arrProductDefault;
      //     return arrProduct 
      // }
      case ProductType.SET_SAN_PHAM_NAM: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_HUNTER: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "HUNTER");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_SANDAL: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "SANDAL");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_THE_THAO: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_THE_THAO");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_CHAY_BO: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind ===  "GIAY_CHAY_BO");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_DA_BANH: {
          arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_DA_BANH");
          return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_TAY: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "GIAY_TAY");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NAM_DEP: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NAM" && product.pkind === "DEP");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_HUNTER: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU" && product.pkind === "HUNTER");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_GOSTO: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU" && product.pkind === "GOSTO");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_SANDAL: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "SANDAL");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_BUP_BE: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_BUP_BE");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_THOI_TRANG: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_THOI_TRANG");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_CHAY_BO: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_CHAY_BO");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_THE_THAO: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "GIAY_THE_THAO");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_DEP: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "DEP");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_NU_TUI_XACH: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "NU"&& product.pkind === "Túi xách");
        return arrProduct 
      }

      case ProductType.SET_SAN_PHAM_BE_TRAI: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_TRAI");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_BE_TRAI_SANDAL: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "SANDAL");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_BE_TRAI_THE_THAO: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "GIAY_THE_THAO");
        return arrProduct 
      }
      case ProductType.SET_SAN_PHAM_BE_TRAI_DEP: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_TRAI" && product.pkind === "DEP");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI_BUP_BE: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_BUP_BE");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI_THE_THAO: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_THE_THAO");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI_SANDAL: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "SANDAL");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI_DEP: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "DEP");
        return arrProduct 
      } 
      case ProductType.SET_SAN_PHAM_BE_GAI_TAP_DI: {
        arrProduct = arrProductDefault.filter(product => product.pgender === "BE_GAI" && product.pkind === "GIAY_TAP_DI");
        return arrProduct 
      } 
      // case ProductType.SET_SAN_PHAM_ALL: {
      //   arrProduct = arrProductDefault.filter(product => product.pkind !== undefined && product.pkind !== null && product.pkind !== '');
      //   return arrProduct 
      // }
      // case ProductType.SET_CHI_TIET_SAN_PHAM: {

      //   productDetail = action.productDetail;
      //   return arrProduct ;

      // }

      default: return [] 
  }
}