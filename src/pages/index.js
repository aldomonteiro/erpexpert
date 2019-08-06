import React from "react"
import { Link } from "gatsby"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Layout from "../components/layout"
import Helmet from "../components/helmet"
import profile_picture from '../images/profile-picture.jpg'

const IndexPage = () => (
  <Layout>
    <Helmet title="ERP Expert" />
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col sm={12}>
            <h2>Bem-vindo(a) a ERPexpert</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div style={{ texAlign: 'justify', textJustify: 'inter-word' }} >
              <h4>
                Ensinamos profissionais a dominar o SAP na metade do tempo de outros treinamentos existentes.
              </h4>
              <p>
                Somos especialistas em SAP ERP e criamos materiais e cursos que ajudam a transformar você e sua equipe
                em especialistas SAP também.
              </p>
              <p>
                Escrevemos um e-book sobre um dos módulos mais importantes do SAP: o módulo SD (Vendas e Distribuição), baseado
                no material oficial da SAP e que mostra o fluxo operacional de um processo de vendas do começo ao fim.
              </p>
              <p>
                Clique no botão abaixo para receber a sua cópia GRATUITAMENTE:
              </p>
              <p>
                <Button variant="primary" size="lg">Baixe Agora!</Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Layout >
)

export default IndexPage
