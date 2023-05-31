import { Box, Button, Card, FormControl, Grid, Input, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pdfGenerate from "./pdfGenerate";


export default function Info() {
    const [murado, setMurado] = useState();
    const [plano, setPlano] = useState();
    const [regiao, setRegiao] = useState();
    const [pavimentacao, setPavimentacao] = useState();
    const [DISTCE, setDISTCE] = useState(138);
    const [DIST232, setDIST232] = useState(12.5);
    const [DISTAVPRINC, setDISTAVPRINC] = useState(9.5);
    const [TEST, setTEST] = useState(3);
    const [AREA, setAREA] = useState(54);
    const [AREAC, setAREAC] = useState(0);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [inscricao, setInscricao] = useState();
    const [PU, setPU] = useState(86.5032419743474*murado);

    useEffect(() =>{
        setPU(86.50324*(1.70934**murado)*(0.73373**plano)*(0.99955**DISTCE)*(0.99960**DIST232)*(1.00134**DISTAVPRINC)*(1.83479**regiao)*(0.98546**TEST)*(AREA**0.15470)*(1.79024**pavimentacao));
    },    [murado, plano, DISTCE, DIST232, DISTAVPRINC, regiao, TEST, AREA, pavimentacao]);

    const handlePdf = () => {
        pdfGenerate(PU, murado, plano, regiao, pavimentacao, DISTCE, DIST232, DISTAVPRINC, TEST,  AREA, AREAC, nome, endereco, inscricao);
    }

    const handleChangeInscricao = (event) => {
        setInscricao(event.target.value);
    };

    const handleChangeNome = (event) => {
        setNome(event.target.value);
    };

    const handleChangeEndereco = (event) => {
        setEndereco(event.target.value);
    };

    const handleChangeMurado = (event) => {
        setMurado(event.target.value);
    };
    const handleChangePlano = (event) => {
        setPlano(event.target.value);
    };
    const handleChangeRegiao = (event) => {
        setRegiao(event.target.value);
    };
    const handleChangePavimentacao = (event) => {
        setPavimentacao(event.target.value);
    };

    const handleSliderChangeAREA = (event, newValue) => {
        setAREA(newValue);
    };
    const handleInputChangeAREA = (event) => {
        setAREA(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurAREA = () => {
        if (AREA < 54) {
            setAREA(54);
        } else if (AREA > 11050) {
            setAREA(11050);
        }
    };

    const handleSliderChangeAREAC = (event, newValue) => {
        setAREAC(newValue);
    };
    const handleInputChangeAREAC = (event) => {
        setAREAC(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurAREAC = () => {
        if (AREAC < 0) {
            setAREAC(0);
        } else if (AREAC > 11050) {
            setAREAC(11050);
        }
    };

    const handleSliderChangeTEST = (event, newValue) => {
        setTEST(newValue);
    };
    const handleInputChangeTEST = (event) => {
        setTEST(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurTEST = () => {
        if (TEST < 3) {
            setTEST(3);
        } else if (TEST > 200) {
            setTEST(200);
        }
    };


    const handleSliderChangeDISTAVPRINC = (event, newValue) => {
        setDISTAVPRINC(newValue);
    };
    const handleInputChangeDISTAVPRINC = (event) => {
        setDISTAVPRINC(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurDISTAVPRINC = () => {
        if (DISTAVPRINC < 9.5) {
            setDISTAVPRINC(9.5);
        } else if (DISTAVPRINC > 2720) {
            setDISTAVPRINC(2720);
        }
    };


    const handleSliderChangeDIST232 = (event, newValue) => {
        setDIST232(newValue);
    };
    const handleInputChangeDIST232 = (event) => {
        setDIST232(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurDIST232 = () => {
        if (DIST232 < 12.5) {
            setDIST232(12.5);
        } else if (DIST232 > 3320) {
            setDIST232(3320);
        }
    };


    const handleSliderChangeDISTCE = (event, newValue) => {
        setDISTCE(newValue);
    };
    const handleInputChangeDISTCE = (event) => {
        setDISTCE(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlurDISTCE = () => {
        if (DISTCE < 138) {
            setDISTCE(138);
        } else if (DISTCE > 9460) {
            setDISTCE(9460);
        }
    };


    return(

        <Box
            sx={{
                width: 600,
                margin: 'auto'
            }}
        >
            <Card
                sx={{marginTop: 10,
                    marginBottom: 20,
                    p:10, pt: 5, pb: 5,
                    width: 550
                }}
            >


                <Box>
                    <TextField
                        label="Solicitante e/ou interessado"
                        id="outlined-size-small"
                        size="small"
                        sx={{m:1, width: 500}}
                        value={nome}
                        onChange={handleChangeNome}
                    />
                </Box>
                <Box>
                    <TextField
                        label="Endereço do imóvel"
                        id="outlined-size-small"
                        size="small"
                        sx={{m:1, width: 500}}
                        value={endereco}
                        onChange={handleChangeEndereco}
                    />
                </Box>

                <Box>
                    <TextField
                        label="Inscrição do imóvel"
                        id="outlined-size-small"
                        size="small"
                        sx={{m:1, width: 500}}
                        value={inscricao}
                        onChange={handleChangeInscricao}
                    />
                </Box>

                <Box>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                        <InputLabel id="murado">Murado: </InputLabel>
                        <Select
                            labelId="murado"
                            id="murado"
                            value={murado}
                            label="Murado"
                            onChange={handleChangeMurado}
                        >
                            <MenuItem value={1}>Sim</MenuItem>
                            <MenuItem value={0}>Não</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">

                        <InputLabel id="plano">Terreno plano: </InputLabel>
                            <Select
                                labelId="plano"
                                id="plano"
                                value={plano}
                                label="Plano"
                                onChange={handleChangePlano}
                            >
                                <MenuItem value={1}>Sim</MenuItem>
                                <MenuItem value={0}>Não</MenuItem>
                            </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                        <InputLabel id="demo-select-small">Região: </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={regiao}
                            label="Região"
                            onChange={handleChangeRegiao}
                        >
                            <MenuItem value={0}>Norte</MenuItem>
                            <MenuItem value={1}>Sul</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                        <InputLabel id="demo-select-small">Pavimentação: </InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={pavimentacao}
                            label="Pavimentação"
                            onChange={handleChangePavimentacao}
                        >
                            <MenuItem value={3}>Asfalto</MenuItem>
                            <MenuItem value={2}>Paralelepípedo</MenuItem>
                            <MenuItem value={1}>Não pavimentado/solo</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Área do imóvel(m²):
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof AREA === 'number' ? AREA : 0}
                            onChange={handleSliderChangeAREA}
                            aria-labelledby="input-slider"
                            min={54}
                            step={1}
                            max={11050}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={AREA}
                            size="small"
                            onChange={handleInputChangeAREA}
                            onBlur={handleBlurAREA}
                            inputProps={{
                            step: 1,
                            min: 54,
                            max: 11050,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Área do imóvel construida(m²):
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof AREAC === 'number' ? AREAC : 0}
                            onChange={handleSliderChangeAREAC}
                            aria-labelledby="input-slider"
                            min={54}
                            step={1}
                            max={11050}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={AREAC}
                            size="small"
                            onChange={handleInputChangeAREAC}
                            onBlur={handleBlurAREAC}
                            inputProps={{
                            step: 1,
                            min: 54,
                            max: 11050,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Testada do imóvel (m):
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof TEST === 'number' ? TEST : 0}
                            onChange={handleSliderChangeTEST}
                            aria-labelledby="input-slider"
                            min={3}
                            step={1}
                            max={200}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={TEST}
                            size="small"
                            onChange={handleInputChangeTEST}
                            onBlur={handleBlurTEST}
                            inputProps={{
                            step: 1,
                            min: 3,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Distância euclidiana até o ponto mais próximo da Avenida principal mais próxima (m):
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof DISTAVPRINC === 'number' ? DISTAVPRINC : 0}
                            onChange={handleSliderChangeDISTAVPRINC}
                            aria-labelledby="input-slider"
                            min={9.5}
                            step={1}
                            max={2720}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={DISTAVPRINC}
                            size="small"
                            onChange={handleInputChangeDISTAVPRINC}
                            onBlur={handleBlurDISTAVPRINC}
                            inputProps={{
                            step: 1,
                            min: 9.5,
                            max: 2720,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Distância euclidiana até o ponto mais próximo da BR 232 (m):
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof DIST232 === 'number' ? DIST232 : 0}
                            onChange={handleSliderChangeDIST232}
                            aria-labelledby="input-slider"
                            min={12.5}
                            step={1}
                            max={3320   }
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={DIST232}
                            size="small"
                            onChange={handleInputChangeDIST232}
                            onBlur={handleBlurDIST232}
                            inputProps={{
                            step: 1,
                            min: 12.5,
                            max: 3320,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{m:2, width: 400 }}>
                    <Typography id="input-slider" gutterBottom>
                        Distância euclidiana até a Matriz de Sant'Ana (m)
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                        <Slider
                            value={typeof DISTCE === 'number' ? DISTCE : 0}
                            onChange={handleSliderChangeDISTCE}
                            aria-labelledby="input-slider"
                            min={138}
                            step={1}
                            max={9460}
                        />
                        </Grid>
                        <Grid item>
                        <Input
                            value={DISTCE}
                            size="small"
                            onChange={handleInputChangeDISTCE}
                            onBlur={handleBlurDISTCE}
                            inputProps={{
                            step: 1,
                            min: 138,
                            max: 9460,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{

                        alignItems: 'center'
                    }}
                >
                    <Button variant="contained" size="small"
                    sx={{width: 550}}
                    onClick={handlePdf}>
                        Gerar relatório
                    </Button>
                </Box>
            </Card>
        </Box>

    );
}
