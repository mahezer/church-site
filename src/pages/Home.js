import Page from '../components/Page';
import Menu from '../components/Menu';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
      <div id='carousel'>
        <Carousel>
          { items.map( (item, i) => <Item key={i} item={item} /> ) }
        </Carousel>
      </div>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Typography  component="h2">
              NOSSA SEMANA
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <TableContainer>
              <Table>
                <TableHead></TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;
