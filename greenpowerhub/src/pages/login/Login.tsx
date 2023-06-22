import './Login.css';
import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
function Login() {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align="center" className="textos">Entrar</Typography>
                        <TextField id="usuario" label='usuario' variant='outlined' name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label='senha' variant='outlined' name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{ borderColor: "lightgrey", backgroundColor: "#22577a", color: "lightgrey" }}>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastroUsuario">
                        <Typography variant='subtitle1' gutterBottom align="center" className="textos">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">


            </Grid>
        </Grid>
    )
}

export default Login;