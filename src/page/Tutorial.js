import React, { Component } from "react";
import { DiscussionEmbed } from 'disqus-react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";

class Blog extends Component {
  render() {
    const items = [];
    const json = [
      {
        'id': '1',
        'title': 'DELPHI 7',
        'logo': './img/tutorial/delphi7.png',
        'path': '/delphi7'
      },
      {
        'id': '2',
        'title': 'ANDROID STUDIO',
        'logo': './img/tutorial/androidstudio.png',
        'path': '/java'
      },
      {
        'id': '3',
        'title': 'PHP',
        'logo': './img/tutorial/php.png',
        'path': '/php'
      },
      {
        'id': '4',
        'title': 'CODEIGNITER',
        'logo': './img/tutorial/codeigniter.png',
        'path': '/codeigniter'
      },
      {
        'id': '5',
        'title': 'LARAVEL',
        'logo': './img/tutorial/laravel.png',
        'path': '/laravel'
      },
      {
        'id': '6',
        'title': 'SLIM PHP',
        'logo': './img/tutorial/slim.png',
        'path': '/slimphp'
      },
      {
        'id': '6',
        'title': 'FLUTTER',
        'logo': './img/tutorial/flutter.png',
        'path': '/flutter'
      },
      {
        'id': '7',
        'title': 'REACT JS',
        'logo': './img/tutorial/reactjs.png',
        'path': '/reactjs'
      },
      {
        'id': '8',
        'title': 'REACT NATIVE',
        'logo': './img/tutorial/reactnative.png',
        'path': '/reactnative'
      },
    ];

    json.forEach(vals => {
      items.push(
        <div className="col-md-4" style={{ marginBottom: 20 }} key={vals['id']}>
          <Card key={vals['id']}>
            <CardImg top width="100%" width="100%" src={vals['logo']} alt={vals['title']} />
            <CardBody>
              <CardTitle className="text-center"><h5>{vals['title']}</h5></CardTitle>
              <Link className="btn btn-block btn-secondary" to={vals['path']}>Mulai</Link>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <h2>Tutorial</h2>
        <div>
          <div className="row">
            {items}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;