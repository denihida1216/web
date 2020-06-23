import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";
class Home extends Component {
  render() {
    const data = [
      {
        'id': 'delphi',
        'title': 'DELPHI',
        'path': '/blog/delphi',
      },
      {
        'id': 'android',
        'title': 'ANDROID',
        'path': '/blog/android',
      },
      {
        'id': 'web',
        'title': 'WEB',
        'path': '/blog/web',
      },
      {
        'id': 'odoo',
        'title': 'ODOO',
        'path': '/blog/odoo',
      },
      {
        'id': 'flutter',
        'title': 'FLUTTER',
        'path': '/blog/flutter',
      },
      {
        'id': 'ci',
        'title': 'CODEIGNITER',
        'path': '/blog/codeigniter',
      },
      {
        'id': 'lv',
        'title': 'LARAVEL',
        'path': '/blog/laravel',
      },
    ];
    const items = [];
    data.forEach(data => {
      items.push(
        <div key={data['id']}>
          <Link to={data['path']} className="list-group-item list-group-item-action">{data['title']}</Link>
        </div>);
    });

    const items2 = [];
    for (let i = 0; i < 10; i++) {
      items2.push(
        <div className="col-md-6" style={{ marginBottom: 20, }} key={i}>
          <Card key={i}>
            <CardImg top width="100%" src="./img/blog/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Title{i + 1}</CardTitle>
              <CardSubtitle>Subtitle{i + 1}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button className="float-right">Read More</Button>
            </CardBody>
          </Card>
        </div>);
    };
    
    return (
      <div>
        <h1>Blog</h1>
        <div className="row">
          <div className="col-md-9">
          <div className="row">
            {items2}
          </div>
          </div>
          <div className="col-md-3">
            <b className="list-group-item" style={{textAlign:"center",}}>TAG</b>
           {items}
          </div>
        </div>

      </div>
    );
  }
}
 
export default Home;