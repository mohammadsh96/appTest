import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';


export default function Cards(){





return (

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/65716671_2090467137730104_1229119391283544064_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeGMekdEq-bdwt4EJrokt6Lcb-Bvxv3zo_pv4G_G_fOj-m2DqXdRpeQlHYC59VkZm-leO9Xq2xbxskwTvW_FTHaL&_nc_ohc=bHC2qZ0hopMAX_7TyFR&_nc_ht=scontent.famm2-3.fna&oh=00_AT8tjXy8-ulDdVZ1AidES3Ugv7_cV7JveCt2UtcG1b5Euw&oe=62AC6359" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/55845529_1945789205531232_1394921913641336832_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=174925&_nc_eui2=AeHXf9ik7xrLmNlbCEC0cgmFoPg0wzzxva-g-DTDPPG9r4OculvlUM8CG2DhAqNCZ1AR790Mcgprr0WEIKe5n3zy&_nc_ohc=5AzyqneWEdYAX8CPgZ2&_nc_ht=scontent.famm2-3.fna&oh=00_AT_czQmlZYTZHPYkPiij78y_7nwYYAHHliZJZdLJ05AD3A&oe=62AC0DF2" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/48326983_1800358256740995_6864949303564042240_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeFYoqo75lhI51OUXrKw5kPmWrOym24fJRtas7Kbbh8lG4k2GCu9_yir-8H5_9ajLFiomXBgGmtdJoAQD1gGxpAg&_nc_ohc=8qd68G1dt5EAX__rypr&_nc_ht=scontent.famm2-3.fna&oh=00_AT8l0AnmadJu5ASATUYNN6EWAGNPfhdYfIPcClLQEOD-Fg&oe=62ABC3D9" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
/* <CardGroup class="cardG" id="card" >
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/65716671_2090467137730104_1229119391283544064_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeGMekdEq-bdwt4EJrokt6Lcb-Bvxv3zo_pv4G_G_fOj-m2DqXdRpeQlHYC59VkZm-leO9Xq2xbxskwTvW_FTHaL&_nc_ohc=bHC2qZ0hopMAX_7TyFR&_nc_ht=scontent.famm2-3.fna&oh=00_AT8tjXy8-ulDdVZ1AidES3Ugv7_cV7JveCt2UtcG1b5Euw&oe=62AC6359" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/55845529_1945789205531232_1394921913641336832_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=174925&_nc_eui2=AeHXf9ik7xrLmNlbCEC0cgmFoPg0wzzxva-g-DTDPPG9r4OculvlUM8CG2DhAqNCZ1AR790Mcgprr0WEIKe5n3zy&_nc_ohc=5AzyqneWEdYAX8CPgZ2&_nc_ht=scontent.famm2-3.fna&oh=00_AT_czQmlZYTZHPYkPiij78y_7nwYYAHHliZJZdLJ05AD3A&oe=62AC0DF2" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/48326983_1800358256740995_6864949303564042240_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_eui2=AeFYoqo75lhI51OUXrKw5kPmWrOym24fJRtas7Kbbh8lG4k2GCu9_yir-8H5_9ajLFiomXBgGmtdJoAQD1gGxpAg&_nc_ohc=8qd68G1dt5EAX__rypr&_nc_ht=scontent.famm2-3.fna&oh=00_AT8l0AnmadJu5ASATUYNN6EWAGNPfhdYfIPcClLQEOD-Fg&oe=62ABC3D9" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */


)

}