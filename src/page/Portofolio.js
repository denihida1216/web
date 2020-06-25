import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Portofolio extends Component {
  render() {
    return (
      <div style={{ textAlign: "justify" }}>
        <h1>Portofolio</h1>
        <p>Halaman ini berisi project yang pernah dan sedang saya kerjakan.
          Untuk project yang tidak bersifat privasi, bisa ditemukan di <a href="https://github.com/denihida1216">Github</a>.</p>
        <div className="row">

          <div className="col-md-12" style={{ marginBottom: 20 }} key='9'>
            <h3>DEVELOP MODUL ODOO 12 COMMUNITY DI PT. CHELSEA JAYA MAKMUR (PIO PUDDING)</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="odoo pio 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/318x180.svg" />
            <p>
              <br />
              Dibangun menggunakan python 3 framework odoo dengan bantuan software build Pycharm.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='8'>
            <h3>DEVELOP MODUL ODOO 1O COMMUNITY DI PT. TIFATEX TEXTILE</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="odoo tifatex 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/318x180.svg" />
            <p>
              <br />
              Dibangun menggunakan python 2.7 framework odoo dengan bantuan software build Pycharm.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='7'>
            <h3>DEVELOP MODUL ODOO 1O COMMUNITY DI PT. ISA (IDOLA SELARAS ABADI) TEXTILE</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="odoo isa 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/318x180.svg" />
            <p>
              <br />
              Dibangun menggunakan python 2.7 framework odoo dengan bantuan software build Pycharm.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='6'>
            <h3>APLIKASI MOBILE ANDROID REUNI CGY (CAKRAWALA GLOBAL YAKSA)</h3>
            <p>URL: <a href="https://play.google.com/store/apps/details?id=com.reuni.cgy">Google Play</a></p>
            <LazyLoadImage
              alt="android cgy 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/cgy1.png" />
            <p>
              APLIKASI MOBILE ANDROID REUNI CGY (CAKRAWALA GLOBAL YAKSA) bertujuan sebagai media pendataan alumni
              SMP,SMK NEGERI PURWAKARTA dengan fitur dashboard grafik alumni dengan nilai angkatan beserta pekerjaan,
              chatting antar alumni, form pengisian pekerjaan dan lokasi koordinat rumah masing-masing alumni
              dengan melakukan update saat berada dirumah.
            <br />
              Dibangun menggunakan java android native dengan bantuan software build Android Studio.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='5'>
            <h3>DEVELOP MODUL ODOO 10 COMMUNITY DI CV. ALMEGATEX</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="odoo almegatex 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/318x180.svg" />
            <p>
              <br />
              Dibangun menggunakan python 2.7 framework odoo dengan bantuan software build Pycharm.
              </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='4'>
            <h3>DEVELOP MODUL ODOO 10 COMMUNITY DI PT. JAYAMAS DWI PERKASA (SIERRA WATER)</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="odoo sierra 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/sierraodoo1.png" />
            <p>
              <br />
              Dibangun menggunakan python 2.7 dengan bantuan software build Pycharm.
              </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='3'>
            <h3>APLIKASI MOBILE ANDROID PURCHASE ORDER KONEKSI KE ODOO 10 COMMUNITY DI PT. JAYAMAS DWI PERKASA (SIERRA WATER)</h3>
            <p>URL: <a href="https://play.google.com/store/apps/details?id=com.water.sierra">Google Play</a></p>
            <LazyLoadImage
              alt="android sierra 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/sierra1.png" />
            <p>APLIKASI MOBILE ANDROID PURCHASE ORDER KONEKSI KE ODOO 10 COMMUNITY DI PT. JAYAMAS DWI PERKASA (SIERRA WATER)
            bertujuan untuk memudahkan kabag dalam melakukan validasi yang diinput oleh user, dan mengkontrol pembelian yang sudah dibayar atau belum.
            pada menu report dan sales, hanya untuk melihat informasi penjualan sales yang mencapai target minimum untuk rekap insentif sales.
              <br />
              Dibangun menggunakan java android native dengan bantuan software build Android Studio.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='2'>
            <h3>DEVELOP MODUL ODOO 12 ENTERPRISE DI PT. MULTI STAR RUKUN ABADI (SHARON BAKERY)</h3>
            <p>URL: <a href="https://github.com/denihida1216/">Github</a></p>
            <LazyLoadImage
              alt="sharon odoo 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/sharonodoo1.png" />
            <p>
              <br />
              Dibangun menggunakan python 3 framework odoo dengan bantuan software build Pycharm.
            </p>
          </div>

          <div className="col-md-12" style={{ marginBottom: 20 }} key='1'>
            <h3>APLIKASI DESKTOP WORK ORDER PT.MULTI STAR RUKUN ABADI (SHARON BAKERY)</h3>
            <p>URL: <a href="https://github.com/denihida1216/sharon_wo.git">Github</a></p>
            <LazyLoadImage
              alt="sharon wo 1"
              width="100%"
              effect="blur"
              src="./img/portofolio/wo1.png" />
            <p>APLIKASI DESKTOP WORK ORDER PT. MULTI STAR RUKUN ABADI SHARON BAKERY bertujuan untuk memudahkan fasilitas
            dalam melihat list work order yang belum, sedang diproses dan sudah dikerjakan.
            ketika user membuat draft work order sekaligus dapat melihat nomor urut antrian, menunggu sesuai nomor antrian
            sehingga dapat terpantau pekerjaan yang diberikan antar departmen yang melakukan work order.
              <br />
              Dibangun menggunakan pascal dengan bantuan software build Delphi 7.
            </p>
            <h5>
              Print Out Work Order
            </h5>
            <LazyLoadImage
              alt="sharon wo 2"
              width="100%"
              effect="blur"
              src="./img/portofolio/wo2.png" />
            <h5>
              Menu Rekap data Work Order
            </h5>
            <LazyLoadImage
              alt="sharon wo 3"
              width="100%"
              effect="blur"
              src="./img/portofolio/wo3.png" />
            <h5>
              Print Out Rekap data Work Order
            </h5>
            <LazyLoadImage
              alt="sharon wo 4"
              width="100%"
              effect="blur"
              src="./img/portofolio/wo4.png" />
          </div>

        </div>
      </div>
    );
  }
}

export default Portofolio;