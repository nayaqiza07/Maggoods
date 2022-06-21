import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./Order.css";

const Order = () => {
  return (
    <div className="o">
      <Container className="o-container">
        <Row className="o-title mb-5">
          <Col>
            <h1>Our Product</h1>
          </Col>
        </Row>
        <Row xs={1} lg={3}>
          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://static.wixstatic.com/media/6bbeb7_0587f45c08914873bb67c7f235fe0bfc~mv2.png/v1/fit/w_544%2Ch_396%2Cal_c/file.png"
              />
              <Card.Body>
                <Card.Title>Magot Segar</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-36314049/no_brand_maggot_kering_bsf_100gr_larva_lalat_pakan_makanan_ikan_magot_100_gram_full01_lr8f6i3h.jpg"
              />
              <Card.Body>
                <Card.Title>Magot Kering</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-4020529/oem_tepung_maggot_rfam_jaya_larva_lalat_hitam_bsf_organik_pakan_burung_murai_kacer_ciblek_pentet_pleci_full04.jpg"
              />
              <Card.Body>
                <Card.Title>Tepung Magot</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} lg={3}>
          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://s1.bukalapak.com/img/13012207361/s-330-330/data.jpeg.webp"
              />
              <Card.Body>
                <Card.Title>Telur Magot</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/9/15/98760/98760_dce4d185-a4b3-4c0d-a0ab-bb4ab7956858_1560_1560.jpg"
              />
              <Card.Body>
                <Card.Title>Puppa</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="o-card">
              <Card.Img
                className="o-gambar"
                variant="top"
                src="https://s0.bukalapak.com/img/08054327631/large/Termurah_Pupuk_Organik_Kasgot_Bekas_Magot_Organic_Fertilizer.jpg"
              />
              <Card.Body>
                <Card.Title>Pupuk Kering</Card.Title>
                <Card.Text>Rp. 6.500</Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
