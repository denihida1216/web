import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from './img/blog/318x180.svg';

class Portofolio extends Component {
  render() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div className="col-md-3" style={{ marginBottom: 20 }} key={i}>
          <Card key={i}>
            <CardImg top width="100%" src={logo} alt="Card image cap" />
            <CardBody>
              <CardTitle>Title Project{i + 1}</CardTitle>
              <CardSubtitle>Subtitle Project{i + 1}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Read More</Button>
            </CardBody>
          </Card>
        </div>);
    }
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