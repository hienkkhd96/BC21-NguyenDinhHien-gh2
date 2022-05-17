import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamChiTiet extends Component {
  render() {
    let { hinhAnh, manHinh, heDieuHanh, giaBan } = this.props.chiTietSanPham;
    return (
      <div className="row mt-5">
        <img className="col-5" src={hinhAnh} alt="" />

        <div className="col-7">
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>

                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>

                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Giá bán</td>

                <td>{giaBan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
let mapStateToProp = (state) => {
return {
  chiTietSanPham: state.sanPham.chiTietSanPham
}
}

export default connect(mapStateToProp)(SanPhamChiTiet)

