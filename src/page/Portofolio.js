import React, { Component } from "react";
 
class Portofolio extends Component {
  render() {
    return (
      <div>
        <h2>Portofolio</h2>
        <p><img data-src="/img/profil.jpg" class="rounded mx-auto d-block lazyloaded" src="/img/profil.jpg"/></p>
        <p>Halaman ini berisi project yang pernah dan sedang saya kerjakan. 
          Ada yang bersifat side project dan ada juga yang serius. 
          Untuk project private, saya tidak cantumkan di sini. 
          Untuk project yang lainnya bisa ditemukan di <a href="github.com/denihida1216">Github</a>.</p>
      </div>
    );
  }
}
 
export default Portofolio;