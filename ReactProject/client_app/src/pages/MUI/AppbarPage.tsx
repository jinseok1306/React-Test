﻿import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ButtonAppBar from '../../components/Appbar/ButtonAppBar';
import MenuAppBar from '../../components/Appbar/MenuAppBar';

const AppbarPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>ButtonAppBar</b><div>&nbsp;</div>
                        <ButtonAppBar />
                    </Grid>
                    <Grid item xs={3}>
                        <b>MenuAppBar</b><div>&nbsp;</div>
                        <MenuAppBar />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AppbarPage;