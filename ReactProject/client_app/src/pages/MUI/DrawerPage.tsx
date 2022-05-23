﻿import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import TemporaryDrawer from '../../components/Drawer/TemporaryDrawer';

const DrawerPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>TemporaryDrawer</b><div>&nbsp;</div>
                        <TemporaryDrawer />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default DrawerPage;