import React from 'react'
import './Contenido.css'
import { Button, Col, Row, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import Carousel from 'better-react-carousel'
import img1 from './../Imagenes/industria.jpg'
import img2 from './../Imagenes/industria 2.jpg'
import img3 from './../Imagenes/Industria 3.jpg'
import img4 from './../Imagenes/Indutria 4.jpg'

export default function Contenido() {
  return (
    <div className='contenedor-videos'>
     
       <h1>Argentina tiene con que</h1>
            <hr />	
            <div className='carrousel'>
        <Carousel cols={2} rows={1} gap={10} loop >
          
      
        <Carousel.Item>
          <img width="100%" src={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img2}  />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img3}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img1}  />
        </Carousel.Item>
      
        </Carousel>
        </div>
        <div className='contenedor-video'>
       <div className='titulo-video'>Es con las Pymes, el trabajo argentino y la industria nacional</div>
       <hr></hr>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/BC7ShSKBpJQ?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col >
        <Statistic title="Visitas" value={531655} />
        </Col>
        <Col >
        <Statistic title="Me gusta" value={3} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>
      


        <div className='contenedor-video'>
       <div className='titulo-video'>Felíz día a todas las y los trabajadores</div>
       <hr></hr>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Mhq3FIpH1g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col className='columnas'>
        <Statistic title="Visitas" value={566463} />
        </Col>
        <Col className='columnas'>
        <Statistic title="Me gusta" value={7} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


        <div className='contenedor-video'>
       <div className='titulo-video'>Es tiempo de Argentina</div>
       <hr></hr>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/RHJfuum4vCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col className='columnas' >
        <Statistic title="Visitas" value={1405785} />
        </Col>
        <Col className='columnas' >
        <Statistic title="Me gusta" value={4} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


        <div className='contenedor-video'>
       <div className='titulo-video'>Más industrialización y autopartismo nacional</div>
       <hr></hr>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/9mksAcRYwbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col className='columnas'>
        <Statistic title="Visitas" value={566455 } />
        </Col>
        <Col className='columnas'>
        <Statistic title="Me gusta" value={10} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>

        <div className='contenedor-video'>
       <div className='titulo-video'>El motor productivo de la Argentina</div>
       <hr></hr>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SlGKAqdlGDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col className='columnas' >
        <Statistic title="Visitas" value={983947} />
        </Col>
        <Col className='columnas'>
        <Statistic title="Me gusta" value={6} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


    </div>
  )
}
