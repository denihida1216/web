import React, { Component } from "react";
import { DiscussionEmbed } from 'disqus-react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Blog extends Component {
  render() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(
        <div className="col-md-3" style={{ marginBottom: 20 }} key={i}>
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
    }
    return (
      <div>
        <h2>Blog</h2>
        <p>Halaman blog</p>
        <div>
          <div className="row">
            {items}
          </div>
        </div>
        <DiscussionEmbed
          shortname='denihida1216'
          config={
            {
              url: "https://denihida1216.github.io/web",
              identifier: "https://denihida1216.github.io/web/#/blog",
              title: "Blog",
              language: 'en'
            }
          }
        />
      </div>
    );
  }
}

export default Blog;