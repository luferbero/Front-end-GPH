import './Home.css';
import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from '../../componentes/carousel/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { TokenState } from '../../store/tokens/TokenReducer';


function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state)=> state.tokens
    );// acessa o store, pega o token e atribui a const token

    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

    return (
        <>

            <Grid container direction="row" justifyContent="Center" alignItems="center" className='caixa' >

                <Box display={{ xs: 'none', md: 'block' }}>
                    <Carousel />
                </Box>
                <Grid xs={12} className="postagens">
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo ao Green Power Hub</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Compartilhe aqui seus conhecimentos!</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                        <ModalPostagem/>
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Home;