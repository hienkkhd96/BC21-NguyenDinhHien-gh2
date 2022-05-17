import React, { Component } from "react";
import { connect } from "react-redux";

const tangSoLuongSp = 1;
const giamSoLuongSp = -1;
class ModalGioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sp,index) => {
      return (
        <tr key={index}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img style={{ width: "100px" }} src={sp.hinhAnh} alt="" />
          </td>
          <td>{sp.giaBan}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleThayDoiSoLuong(sp.maSP, tangSoLuongSp);
              }}
              className="btn btn-success mx-2"
            >
              +
            </button>
            {sp.soLuong}
            <button
              onClick={() => {
                this.props.handleThayDoiSoLuong(sp.maSP, giamSoLuongSp);
              }}
              className="btn btn-danger mx-2"
            >
              -
            </button>
          </td>
          <td>{sp.soLuong * sp.giaBan}</td>
        </tr>
      );
    });
  };

  getSoLuongGioHang = () => {
    let tongSoLuong = this.props.gioHang.reduce((tong, sp) => {
      return (tong += sp.soLuong);
    }, 0);

    return tongSoLuong;
  };
  getSotien = () => {
    let tongTien = this.props.gioHang.reduce((tong, sp) => {
      return (tong += sp.soLuong* sp.giaBan);
    }, 0);

    return tongTien;
  };
  render() {
    return (
      <div className="mb-5">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Giỏ hàng ({this.getSoLuongGioHang()})
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            style={{ maxWidth: "60vw" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* render danh sách sản phẩm trong giỏi hàng */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                </table>
              </div>
              {this.getSoLuongGioHang()>0 &&
              <div className="text-dark font-weight-bold">Tổng tiền =
                <span className="ml-2">{this.getSotien()}</span>
              </div>
              }
              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn btn-primary">
                  Thanh toán
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProp = (state)=> {
  return {
    gioHang:state.sanPham.gioHang
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleThayDoiSoLuong: (id,type) => {
      dispatch({
        type:"THAY_DOI_SO_LUONG",
        payload:{id,type}
      })
    },
  }
}
export default connect(mapStateToProp,mapDispatchToProps)(ModalGioHang)