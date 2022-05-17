﻿import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import Checkboxes from '../../components/Checkbox/Checkboxes';

const CheckboxPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>Checkboxes</b>
                        <Checkboxes />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default CheckboxPage;