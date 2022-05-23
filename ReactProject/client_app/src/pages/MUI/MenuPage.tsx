﻿import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicMenu from '../../components/Menu/BasicMenu';
import IconMenu from '../../components/Menu/IconMenu';

const MenuPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicMenu</b><div>&nbsp;</div>
                        <BasicMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IconMenu</b><div>&nbsp;</div>
                        <IconMenu />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default MenuPage;