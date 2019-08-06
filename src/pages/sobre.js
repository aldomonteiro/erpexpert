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
import profile_picture from '../images/sobre-avatar.png'

const IndexPage = () => (
  <Layout>
    <Helmet title="Sobre a ERPexpert" />
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Image src={profile_picture} roundedCircle />
          </Col>
          <Col sm={12} md={6}>
            <h2>Olá, eu sou o Aldo Monteiro, criador da <b><span style={{ color: 'lightblue' }}>ERP</span><span style={{ color: 'orange' }}>expert.</span></b></h2>
            <h3 style={{ color: 'blue' }} >Minha missão é transformar funcionários de empresas que utilizam SAP em especialistas SAP.</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h4>Depois de 10 anos trabalhando com projetos SAP eu percebi que as pessoas demoram muitos anos para dominar o sistema e conseguir resolver a maior parte dos problemas por conta própria.</h4>
            <p>Certa vez, vi um gerente de expedição ligar para a TI da sua empresa cobrando o retorno de um problema que estava travando toda a fábrica. Quando a pessoa da TI disse que não sabia resolver e disse que quem estava resolvendo era um especialista terceirizado, esse gerente gritou de lá:</p>
            <h3><b><i>Você é da TI e não resolve problemas da TI?</i></b></h3>
            <p>Quem trabalha com SAP sabe que isso é bem normal: há os analistas e os especialistas e consultores. Mas para quem não usa o sistema (como esse gerente aí), isso não pode acontecer.</p>
            <p>E apesar de ser bem normal, eu acho que não é obrigatório. <b>O conhecimento para ser um especialista SAP pode ser adquirido sem ter que pagar os olhos da cara em uma super academia completa de mais de 1 mês de duração</b> (como a que eu fiz.)</p>
            <p>Mas não é fácil achar bons treinamentos que preparem e desenvolvam rapidamente. Por isso criei a ERPexpert, uma empresa focada em treinamentos "mão na massa" ministrados por quem tem muita experiência com o dia-a-dia das grandes empresas brasileiras.</p>
            <p> Sem mais delongas, os nossos serviços incluem:</p>
            <ul>
              <li>Treinamento online usando nosso próprio ambiente para quem não pode usar o ambiente da empresa ou que não tem acesso a um ambiente de treinamento.</li>
              <li>Treinamento in-company para equipes que precisam dominar o SAP rapidamente e atender as demandas internas.</li>
              <li>Consultoria de carreira para profissionais que querem se tornar especialistas SAP.</li>
            </ul>
            <p>Quer saber mais detalhes? Clique aqui e entre em contato que conversamos melhor.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Layout >
)

export default IndexPage
