import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ButtonAppBar from '../../components/Appbar/ButtonAppBar';
import MenuAppBar from '../../components/Appbar/MenuAppBar';
import ResponsiveAppBar from '../../components/Appbar/ResponsiveAppBar';
import SearchAppBar from '../../components/Appbar/SearchAppBar';
import PrimarySearchAppBar from '../../components/Appbar/PrimarySearchAppBar';

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
                    <Grid item xs={3}>
                        <b>ResponsiveAppBar</b><div>&nbsp;</div>
                        <ResponsiveAppBar />
                    </Grid>
                    <Grid item xs={3}>
                        <b>SearchAppBar</b><div>&nbsp;</div>
                        <SearchAppBar />
                    </Grid>
                    <Grid item xs={3}>
                        <b>PrimarySearchAppBar</b><div>&nbsp;</div>
                        <PrimarySearchAppBar />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AppbarPage;