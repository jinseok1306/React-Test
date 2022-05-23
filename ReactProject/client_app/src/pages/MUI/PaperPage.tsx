import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import SimplePaper from '../../components/Paper/SimplePaper';
import Variants from '../../components/Paper/Variants';

const PaperPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>SimplePaper</b><div>&nbsp;</div>
                        <SimplePaper />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Variants</b><div>&nbsp;</div>
                        <Variants />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PaperPage;