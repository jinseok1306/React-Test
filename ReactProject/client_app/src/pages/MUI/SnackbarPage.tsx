import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import Variants from '../../components/Skeleton/Variants';
import SimpleSnackbar from '../../components/Snackbar/SimpleSnackbar';
import CustomizedSnackbars from '../../components/Snackbar/CustomizedSnackbars';
import PositionedSnackbar from '../../components/Snackbar/PositionedSnackbar';

const SnackbarPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>SimpleSnackbar</b><div>&nbsp;</div>
                        <SimpleSnackbar />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomizedSnackbars</b><div>&nbsp;</div>
                        <CustomizedSnackbars />
                    </Grid>
                    <Grid item xs={3}>
                        <b>PositionedSnackbar</b><div>&nbsp;</div>
                        <PositionedSnackbar />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SnackbarPage;