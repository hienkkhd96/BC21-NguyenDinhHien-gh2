import { dataPhones } from "../../BaiTapGioHang/dataPhones";

let initialState = {
  dataPhones: dataPhones,
  chiTietSanPham: dataPhones[0],
  gioHang: [],
};

export const sanPhamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "XEM_CHI_TIET": {
      let cloneState = { ...state };
      cloneState.chiTietSanPham = payload;
      return { ...cloneState };
    }
    case "THEM_SAN_PHAM": {
      let cloneState = { ...state };
      let gioHangCopy = [...cloneState.gioHang];

      let index = cloneState.gioHang.findIndex((item) => {
        return item.maSP === payload.maSP;
      });

      if (index === -1) {
        let spGioHang = { ...payload, soLuong: 1 };

        gioHangCopy.push(spGioHang);
      } else {
        gioHangCopy[index].soLuong++;
      }
      cloneState.gioHang = gioHangCopy;
      console.log(cloneState);
      return { ...cloneState };
    }
    case "THAY_DOI_SO_LUONG": {
      const cloneState = { ...state };
      let index = cloneState.gioHang.findIndex((item) => {
        return item.maSP === payload.id;
      });

      let gioHangCopy = [...cloneState.gioHang];
      if (index !== -1) {
        gioHangCopy[index].soLuong = gioHangCopy[index].soLuong + payload.type;
        gioHangCopy[index].soLuong === 0 && gioHangCopy.splice(index, 1);
      }

      cloneState.gioHang=gioHangCopy
      return { ...cloneState };
    }
    default:
      return state;
  }
};
