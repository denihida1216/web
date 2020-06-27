import React, { Component } from "react";
import {
  Card, CardBody
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";

class Home extends Component {
  render() {
    const item = [];
    const json = {
      '2020': [
        {
          'id': '1',
          'tanggal': '2020-01-01 00:00:00',
          'nama': 'Cara Custom Modul Odoo 12 Dengan Javascript',
          'path': '/blog/cara-custom-modul-odoo12-dengan-javascript/'
        },
        {
          'id': '2',
          'tanggal': '2020-01-02 00:00:00',
          'nama': 'Membuat Tampilan Menu Gridview Cardview Android Studio',
          'path': '/blog/membuat-tampilan-menu-gridview-cardview-android-studio/'
        },
        {
          'id': '3',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Android Upload Image Base64 Ke PHP',
          'path': '/blog/android-upload-image-base64-ke-php/'
        },
        {
          'id': '4',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Slim 3 CRUD Sederhana',
          'path': '/blog/slim-3-crud-sederhana/'
        },
        {
          'id': '5',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Menambahkan API Rest Server Di Codeigniter 3',
          'path': '/blog/menambahkan-api-rest-server-di-codeigniter3/'
        },
        {
          'id': '6',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Tutorial PHP Desktop',
          'path': '/blog/tutorial-php-desktop/'
        },
        {
          'id': '7',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Tutorial Print Struk Codeigniter 3',
          'path': '/blog/tutorial-print-struk-codeigniter3/'
        },
        {
          'id': '8',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Tutorial Menambahkan Sweet Alert Codeigniter 3',
          'path': '/blog/tutorial-menambahkan-sweet-alert-codeigniter3/'
        },

      ],
      '2019': [
        {
          'id': '1',
          'tanggal': '2019-01-04 00:00:00',
          'nama': 'Cara Install Odoo 10',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '2',
          'tanggal': '2019-01-05 00:00:00',
          'nama': 'Mengatasi Akses Lambat Service PHP di Server Ubuntu',
          'path': '/blog/mengatasi-akses-lambat-service-php-di-server-ubuntu/'
        },
        {
          'id': '3',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Cara Install Odoo 12',
          'path': '/blog/cara-install-odoo12/'
        },
        {
          'id': '4',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Cara Custom Modul Odoo 10 Dasar',
          'path': '/blog/cara-custom-modul-odoo10-dasar/'
        },
        {
          'id': '5',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Cara Mengatasi Error Attachment Odoo 10',
          'path': '/blog/cara-mengatasi-error-attachment-odoo10/'
        },
        {
          'id': '6',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Cara Cronjob Odoo10',
          'path': '/blog/cara-cronjob-odoo10/'
        },
        {
          'id': '7',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Cara Custom Modul Report Qweb Odoo 10 Dasar',
          'path': '/blog/cara-custom-modul-report-qweb-odoo10-dasar/'
        },
        {
          'id': '8',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Perbedaan Custom Report Odoo 10 & 12',
          'path': '/blog/perbedaan-custom-report-odoo1012/'
        },
        {
          'id': '9',
          'tanggal': '2019-01-06 00:00:00',
          'nama': 'Tutorial Android Firebase Login',
          'path': '/blog/tutorial-android-firebase-login/'
        },

      ],
      '2018': [
        {
          'id': '1',
          'tanggal': '2018-02-07 17:43:21',
          'nama': 'Cara Setting DVR CCTV Akses Online',
          'path': '/blog/cara-setting-dvr-cctv-akses-online/'
        },
        {
          'id': '2',
          'tanggal': '2018-02-18 19:54:43',
          'nama': 'Cara Instal OS Windows / Linux Dengan Rufus',
          'path': '/blog/cara-instal-os-windows-linux-dengan-rufus/'
        },
        {
          'id': '3',
          'tanggal': '2018-02-20 16:00:00',
          'nama': 'Cara Instal DLCD Boot Ke USB',
          'path': '/blog/cara-instal-dlcd-boot-ke-usb/'
        },
        {
          'id': '4',
          'tanggal': '2018-02-20 16:00:00',
          'nama': 'Cara Setting PABX Telepon NEC',
          'path': '/blog/cara-instal-dlcd-boot-ke-usb/'
        },
        {
          'id': '5',
          'tanggal': '2018-02-20 16:00:00',
          'nama': 'Cara Krimping Kabel LAN dan Telepon',
          'path': '/blog/cara-instal-dlcd-boot-ke-usb/'
        },
      ],
    };

    // Object.keys(json).forEach(function (key) {
      // Object.keys(json).forEach(function (key) {
        Object.keys(json).reverse().map((key, i) => {
      item.push(
        <tr key={i}>
          <td colSpan="3">
            <h4>{key}</h4>
          </td>
        </tr>);
      json[key].forEach(vals => {
        item.push(
          <tr key={key+'_'+vals['id']}>
            <td className="p-1">
              <time className="text-secondary badge badge-default small" title={vals['tanggal'] + ' +0800 +0800'}>
                6 Jun <span className="d-none d-md-inline"> {key}</span>
              </time>
            </td>
            <td className="p-1">
              <Link className="text-dark" to={vals['path']}>{vals['nama']}</Link>
            </td>
          </tr>);
      });
    });
    return (
      <div>
        <h1>Arsip </h1>
        <div className="row">
          <div className="col-md-12">
            <Card>
              <CardBody className="p-0">
                <table className="table table-hover bg-white">
                  <tbody>
                    {item}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          {/* col end */}
        </div>
      </div>
    );
  }
}

export default Home;