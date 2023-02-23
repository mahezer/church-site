import Page from '../components/Page';
import Menu from '../components/Menu';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #2",
    description: "Hello World!"
  }
];

const Item = (props) => (
  <Paper>
    <h2>{props.item.name}</h2>
    <p>{props.item.description}</p>
    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
)


function Home() {
  return (
    <div>
      <Menu />
        <div>
          <Carousel>
            { items.map( (item, i) => <Item key={i} item={item} /> ) }
          </Carousel>
        </div>
    </div>
    );
}

export default Home;
