import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ButtonAppBar from '../../components/Appbar/ButtonAppBar';
import BasicCard from '../../components/Card/BasicCard';

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
                </Grid>
            </div>
        </div>
    );
};

export default CardPage;