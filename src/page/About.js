import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from './img/profil.jpg';

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt="profil"
    height="300px"
    width="300px"
    effect="blur"
    src={logo} />
);

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <div><MyImage/></div>
        <p>
            Halo, saya Deni Hidayat, Sering dipanggil Deden (di rumah) dan Deni (di kampus).
          </p>
          <p>
            Saat ini, saya adalah freelance.
            Pernah menempuh pendidikan di Universitas Bale Bandung mengambil program studi Teknik Informatika.
          </p>
          <p>
            Kontak yang bisa dihubungi:
          </p>
          <p>
            Email: <br/><a href="mailto:denihida1216@gmail.com">denihida1216@gmail.com</a><br/>
            Telepon : <br/><a href="tel:+6285721661555">+6285721661555 <em><code>(WhatsApp &amp; Telegram)</code></em></a>
          </p>
      </div>
    );
  }
}
 
export default About;