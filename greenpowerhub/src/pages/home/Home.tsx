import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Home() {

    const items = [

        <div className="item" data-value="1" >
            <img src="./images/energia biomassa.jpg" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/energia hidraulica.png" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/energia maremotriz.jpg" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/energia-nuclear.jpg" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/energiasolar.png" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/parque-eolico.jpg" width={1490} height={500} />
        </div>,
        <div className="item" data-value="1" >
            <img src="./images/energia geotermica.jpg" width={1490} height={500} />
        </div>
    ]

    return (
        <>

            <div className='App'>
                <AliceCarousel
                    autoHeight
                    infinite
                    mouseTracking
                    items={items}
                />
            </div>

            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa' >

                <Grid item xs={12} alignItems=''>
                    <img src="./images/gph.jpg" alt="" width="1288px" height="400px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo ao Green Power Hub</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Compartilhe aqui seus conhecimentos!</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Home;