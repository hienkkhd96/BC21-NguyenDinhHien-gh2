/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { connect } from "react-redux";

class ItemPhone extends Component {
  render() {
    let { hinhAnh, tenSP, giaBan } = this.props.data;
    return (
      <div className="card col-4">
        <img
          style={{ width: "100%", height: "300px", objectFit: "cotain" }}
          className="card-img-top"
          src={hinhAnh}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan}</p>
          <div>
            <button
              onClick={() => {
                this.props.handleChange(this.props.data);
              }}
              className="btn btn-success"
            >
              Xem chi tiết
            </button>
            <button
              onClick={() => {
                this.props.handleThemSanPham(this.props.data);
              }}
              className="btn btn-danger mx-2"
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    danhSachSanPham:state.sanPham.dataPhones
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleThemSanPham: (sp) => {
      dispatch({
        type:"THEM_SAN_PHAM",
        payload:sp
      })
    },
    handleChange: (sp)=> {
      dispatch({
        type:"XEM_CHI_TIET",
        payload:sp,
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPhone)