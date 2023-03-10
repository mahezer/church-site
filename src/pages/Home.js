import React from 'react'
import Menu from '../components/Menu';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Map from '../components/Map';

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

const mapCenter = {
  lat: -20.53577,
  lng: -47.41122
}



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
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Domingo</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Quarta-Feira</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Quinta e Sexta</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Sabado</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>9h: Escola Biblica Dominical</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>20h: Culto de Oração</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Culto nos Lares</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>18h: Culto Teens</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>19h: Culto de Adoração</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Typography>20h: Culto dos Jovens</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Typography  component="h2">
              INFORMAÇÕES
          </Typography>
          <Typography>Whatsapp</Typography>
          <Typography>pibfranca@pibfranca.org.br</Typography>
          <Typography>(16) 3403-4383</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography  component="h2">
              ENDEREÇO DA IGREJA
          </Typography>
          <Typography>
             Rua José de Alencar, 1790, Franca, SP, Brazil
          </Typography>
            <Map center={mapCenter} />
        </Grid>
      </Grid>
    </div>
    );
}

export default Home;
