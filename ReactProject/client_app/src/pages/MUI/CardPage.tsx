import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/Card/BasicCard';
import OutlinedCard from '../../components/Card/OutlinedCard';

const CardPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicCard</b><div>&nbsp;</div>
                        <BasicCard />
                    </Grid>
                    <Grid item xs={3}>
                        <b>OutlinedCard</b><div>&nbsp;</div>
                        <OutlinedCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CardPage;