import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from '../../components/Progress/CircularIndeterminate';
import CircularDeterminate from '../../components/Progress/CircularDeterminate';
import CircularIntegration from '../../components/Progress/CircularIntegration';
import CircularStatic from '../../components/Progress/CircularStatic';
import LinearIndeterminate from '../../components/Progress/LinearIndeterminate';
import LinearDeterminate from '../../components/Progress/LinearDeterminate';
import LinearBuffer from '../../components/Progress/LinearBuffer';
import LinearWithValueLabel from '../../components/Progress/LinearWithValueLabel';

const ProgressPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>CircularIndeterminate</b><div>&nbsp;</div>
                        <CircularIndeterminate />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CircularDeterminate</b><div>&nbsp;</div>
                        <CircularDeterminate />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CircularIntegration</b><div>&nbsp;</div>
                        <CircularIntegration />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CircularStatic</b><div>&nbsp;</div>
                        <CircularStatic />
                    </Grid>
                    <Grid item xs={3}>
                        <b>LinearIndeterminate</b><div>&nbsp;</div>
                        <LinearIndeterminate />
                    </Grid>
                    <Grid item xs={3}>
                        <b>LinearDeterminate</b><div>&nbsp;</div>
                        <LinearDeterminate />
                    </Grid>
                    <Grid item xs={3}>
                        <b>LinearBuffer</b><div>&nbsp;</div>
                        <LinearBuffer />
                    </Grid>
                    <Grid item xs={3}>
                        <b>LinearWithValueLabel</b><div>&nbsp;</div>
                        <LinearWithValueLabel />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ProgressPage;