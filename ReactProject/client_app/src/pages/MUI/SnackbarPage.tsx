import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import Variants from '../../components/Skeleton/Variants';
import SimpleSnackbar from '../../components/Snackbar/SimpleSnackbar';

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
                </Grid>
            </div>
        </div>
    );
};

export default SnackbarPage;