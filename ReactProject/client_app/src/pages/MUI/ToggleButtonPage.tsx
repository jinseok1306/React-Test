import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ToggleButtons from '../../components/ToggleButton/ToggleButtons';
import ToggleButtonsMultiple from '../../components/ToggleButton/ToggleButtonsMultiple';
import VerticalToggleButtons from '../../components/ToggleButton/VerticalToggleButtons';
import ToggleButtonNotEmpty from '../../components/ToggleButton/ToggleButtonNotEmpty';

const ToggleButtonPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>ToggleButtons</b><div>&nbsp;</div>
                        <ToggleButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ToggleButtonsMultiple</b><div>&nbsp;</div>
                        <ToggleButtonsMultiple />
                    </Grid>
                    <Grid item xs={3}>
                        <b>VerticalToggleButtons</b><div>&nbsp;</div>
                        <VerticalToggleButtons />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ToggleButtonNotEmpty</b><div>&nbsp;</div>
                        <ToggleButtonNotEmpty />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ToggleButtonPage;