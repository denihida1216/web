import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt="profil"
    height="300px"
    width="300px"
    effect="blur"
    src="./img/about/profil.jpg" />
);

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div><MyImage/></div>
        <p></p>
        <p>
            Halo, saya Deni Hidayat, Sering dipanggil Deden (di rumah) dan Deni (di kampus).
          </p>
          <p>
            Saat ini, pekerjaan saya freelance.
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