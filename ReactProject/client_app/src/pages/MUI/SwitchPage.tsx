import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicSwitches from '../../components/Switch/BasicSwitches';

const SwitchPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicSwitches</b>
                        <BasicSwitches />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default SwitchPage;