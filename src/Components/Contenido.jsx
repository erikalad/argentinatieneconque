import React from 'react'
import './Contenido.css'
import { Button, Col, Row, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';


export default function Contenido() {
  return (
    <div className='contenedor-videos'>
        <div className='contenedor-video'>
       <div>Es con las Pymes, el trabajo argentino y la industria nacional</div>
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
       <div>Felíz día a todas las y los trabajadores</div>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Mhq3FIpH1g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col >
        <Statistic title="Visitas" value={566463} />
        </Col>
        <Col >
        <Statistic title="Me gusta" value={7} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


        <div className='contenedor-video'>
       <div>Es tiempo de Argentina</div>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/RHJfuum4vCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col >
        <Statistic title="Visitas" value={1405785} />
        </Col>
        <Col >
        <Statistic title="Me gusta" value={4} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


        <div className='contenedor-video'>
       <div>Más industrialización y autopartismo nacional</div>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/9mksAcRYwbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col >
        <Statistic title="Visitas" value={566455 } />
        </Col>
        <Col >
        <Statistic title="Me gusta" value={10} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>

        <div className='contenedor-video'>
       <div>El motor productivo de la Argentina</div>
       <div className='video'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SlGKAqdlGDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
       <Col >
        <Statistic title="Visitas" value={983947} />
        </Col>
        <Col >
        <Statistic title="Me gusta" value={6} prefix={<LikeOutlined />} />
        </Col>
        </div>
        </div>


    </div>
  )
}
