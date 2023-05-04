import React from 'react'
import './Contenido.css'
import { Button, Col, Row, Statistic } from 'antd';
import { LikeOutlined } from '@ant-design/icons';


export default function Contenido() {
  return (
    <div className='contenedor-videos'>
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
  )
}
