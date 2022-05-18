import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicTextFields from '../../components/TextField/BasicTextFields';
import Validation from '../../components/TextField/Validation';
import InputWithIcon from '../../components/TextField/InputWithIcon';
import ComposedTextField from '../../components/TextField/ComposedTextField';

const TextFieldPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicTextFields</b>
                        <BasicTextFields />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Validation</b>
                        <Validation />
                    </Grid>
                    <Grid item xs={3}>
                        <b>InputWithIcon</b>
                        <InputWithIcon />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ComposedTextField</b>
                        <ComposedTextField />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TextFieldPage;