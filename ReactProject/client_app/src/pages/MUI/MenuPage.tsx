import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicMenu from '../../components/Menu/BasicMenu';
import IconMenu from '../../components/Menu/IconMenu';
import DenseMenu from '../../components/Menu/DenseMenu';
import SimpleListMenu from '../../components/Menu/SimpleListMenu';
import PositionedMenu from '../../components/Menu/PositionedMenu';
import AccountMenu from '../../components/Menu/AccountMenu';
import CustomizedMenus from '../../components/Menu/CustomizedMenus';

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
                    <Grid item xs={3}>
                        <b>DenseMenu</b><div>&nbsp;</div>
                        <DenseMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <b>SimpleListMenu</b><div>&nbsp;</div>
                        <SimpleListMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <b>PositionedMenu</b><div>&nbsp;</div>
                        <PositionedMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <b>AccountMenu</b><div>&nbsp;</div>
                        <AccountMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomizedMenus</b><div>&nbsp;</div>
                        <CustomizedMenus />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default MenuPage;