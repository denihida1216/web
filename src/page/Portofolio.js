import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";
class Portofolio extends Component {
  render() {
    const data = [
      {
        'id': 1,
        'title': 'TRACER STUDY ALUMNI BERBASIS ANDROID DENGAN DATABASE FIREBASE',
        'subtitle': '01 Febuari 2019',
        'subtext': 'Membuat Aplikasi Tracer Study Alumni Berbasis Android Di Fakultas Teknologi Informasi ...',
        'image': './img/blog/318x180.svg',
        'path': '/home',
      },
      {
        'id': 2,
        'title': 'ODOO 10 ANDROID PURCHASE ORDER DI PT. JAYAMAS DWI PERKASA',
        'subtitle': '01 Januari 2019',
        'subtext': 'Membuat aplikasi validasi purchase order diperusahaan air minum sierra ...',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      },
      {
        'id': 3,
        'title': 'ODOO 10 DI PT. JAYAMAS DWI PERKASA ',
        'subtitle': '01 Januari 2018',
        'subtext': 'Implementasi & custom modul Odoo 10 diperusahaan air minum sierra ...',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      },
      {
        'id': 4,
        'title': 'Title Alhamdulilah',
        'subtitle': 'Subtite Alhamdulilah',
        'subtext': 'alhamdulilah Text tentang deskripsi',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      },
      {
        'id': 5,
        'title': 'Title Alhamdulilah',
        'subtitle': 'Subtite Alhamdulilah',
        'subtext': 'alhamdulilah Text tentang deskripsi',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      },
      {
        'id': 6,
        'title': 'Title Alhamdulilah',
        'subtitle': 'Subtite Alhamdulilah',
        'subtext': 'alhamdulilah Text tentang deskripsi',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      },
      {
        'id': 7,
        'title': 'Title Alhamdulilah',
        'subtitle': 'Subtite Alhamdulilah',
        'subtext': 'alhamdulilah Text tentang deskripsi',
        'image': './img/blog/318x180.svg',
        'path': '/about',
      }
    ];
    const items = [];
    data.forEach(data => {
      items.push(
        <div className="col-md-6" style={{ marginBottom: 20 }} key={data['id']}>
          <Card key={data['id']}>
            <CardImg top width="100%" src="./img/blog/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle><b>{data['title']}</b></CardTitle>
              <CardSubtitle>{data['subtitle']}</CardSubtitle>
              <CardText>{data['subtext']}</CardText>
              <Link to={data['path']} className="btn float-right">Read More</Link>
            </CardBody>
          </Card>
        </div>);
    });

    return (
      <div>
        <h2>Portofolio</h2>
        <p>Halaman ini berisi project yang pernah dan sedang saya kerjakan.
        Ada yang bersifat side project dan ada juga yang serius.
        Untuk project private, saya tidak cantumkan di sini.
          Untuk project yang lainnya bisa ditemukan di <a href="github.com/denihida1216">Github</a>.</p>
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
}

export default Portofolio;