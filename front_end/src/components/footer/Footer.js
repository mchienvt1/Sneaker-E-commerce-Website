import React from 'react'
import Logo from '../Logo';
import style from './Footer.module.css';
import boCongThuongImg from "../../assets/footer/bocongthuong.webp";


export default function Footer() {
  return (
    <>
      <footer className={`${style.footer}`}>
        <div className={`col-10 row ${style.footerContent}`}>
          <div className="col-8 row">
            <div className="col-4">
              <h4>VỀ BITI'S</h4>
              <div className={`${style.contentFooter}`}>
                <a href="http://localhost:3000/">Về Bitis</a>
                <a href="http://localhost:3000/">Câu chuyện Biti's</a>
                <a href="http://localhost:3000/">Bước tiến phát triển</a>
                <a href="http://localhost:3000/">Hoạt Động</a>
                <a href="http://localhost:3000/">Liên hệ</a>
              </div>
            </div>
            <div className="col-4">
              <h4>THÔNG TIN</h4>
              <div className={`${style.contentFooter}`}>
                <a href="http://localhost:3000/">Trạng thái đơn hàng</a>
                <a href="http://localhost:3000/">Hình thức giao hàng</a>
                <a href="http://localhost:3000/">Hình thức thanh toán</a>
                <a href="http://localhost:3000/">Hướng dẫn cách chọn Size</a>
                <a href="http://localhost:3000/">Chính sách đổi Size</a>
                <a href="http://localhost:3000/">Chính sách đổi trả</a>
                <a href="http://localhost:3000/">Chính sách bảo hành</a>
                <a href="http://localhost:3000/">Chính sách khách hàng thân thiết</a>
              </div>
            </div>
            <div className="col-4">
              <h4>TRỢ GIÚP</h4>
              <div className={`${style.contentFooter}`}>
                <a href="http://localhost:3000/">Tuyển dụng</a>
                <a href="http://localhost:3000/">Hệ thống cửa hàng</a>
                <a href="http://localhost:3000/">Liện hệ hợp tác</a>
                <a href="http://localhost:3000/">Q&A</a>
              </div>
            </div>
          </div>
          <div className= "col-4">
            <Logo childClass={style.logo}/>
            <div >
              <div><b>CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG BÌNH TIÊN</b></div>
              <div><b>Địa chỉ: </b>22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh</div>
              <div><b>Điện thoại: </b>(028) 38 753 443</div>
              <div><b>Email:Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại lý (offline): </b>chamsockhachhang@bitis.com.vn</div>
              <div><b>Hotline: </b>0966158666</div>
              <div><b>Thời gian tư vấn: </b>8h – 21h30 các ngày trong tuần (trừ ngày Lễ, Tết)</div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`row ${style.copyright}`}>
        <div
          className={`m-auto ${style.copyrightContent}`}
        >
            <div className={` ${style.leftSide}`}>
              <div className="col-12">
                <a href="http://localhost:3000/">Điều khoản</a>
                <a href="http://localhost:3000/">Chính sách bảo mật</a>
                <a href="http://localhost:3000/">Hướng dẫn sử dụng</a>
              </div>
              <div className='col-12'>
                Copyright © 2024 
                <a href="http://localhost:3000/">Biti's.</a>
                <a href="http://localhost:3000/">Powered by Haravan Enterprise</a>
              </div>
            </div>
            <div className={`${style.registered}`}>
              <img src={boCongThuongImg} alt="Đã đăng ký" className="d-flex justify-content-center"/>
            </div>
            <div>
              Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992, được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM
            </div>

          </div>
        </div>
    </>
  )
}
