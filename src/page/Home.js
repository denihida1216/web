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
    return (
      <div>
        <h1>Arsip</h1>
        <div className="row">
          <div className="col-md-12">
            <Card key={'2020'}>
              <CardBody className="p-0">
                <table className="table table-hover bg-white">
                  <tbody>
                    <tr>
                      <td colspan="3">
                        <h4>2020</h4>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <time className="text-secondary badge badge-default small" title="2015-06-06 23:44:45 +0800 +0800">
                          6 Jun<span className="d-none d-md-inline"> 2020</span>
                        </time>
                      </td>
                      <td className="p-1">
                        <Link className="text-dark" to="/blog/hp-cooling-fan/">Memperbaiki Laptop HP: COOLING FAN (902) ERROR</Link>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3">
                        <h4>2019</h4>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <time className="text-secondary badge badge-default small" title="2015-06-06 23:44:45 +0800 +0800">
                          6 Jun<span className="d-none d-md-inline"> 2019</span>
                        </time>
                      </td>
                      <td className="p-1">
                        <Link className="text-dark" to="/blog/hp-cooling-fan/">Memperbaiki Laptop HP: COOLING FAN (902) ERROR</Link>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="3">
                        <h4>2018</h4>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1">
                        <time className="text-secondary badge badge-default small" title="2015-06-06 23:44:45 +0800 +0800">
                          6 Jun<span className="d-none d-md-inline"> 2018</span>
                        </time>
                      </td>
                      <td className="p-1">
                        <Link className="text-dark" to="/blog/hp-cooling-fan/">Memperbaiki Laptop HP: COOLING FAN (902) ERROR</Link>
                      </td>
                    </tr>
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