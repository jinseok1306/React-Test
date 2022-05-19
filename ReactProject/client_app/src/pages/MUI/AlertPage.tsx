import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicAlerts from '../../components/Alert/BasicAlerts';
import DescriptionAlerts from '../../components/Alert/DescriptionAlerts';

const AlertPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicAlerts</b><div>&nbsp;</div>
                        <BasicAlerts />
                    </Grid>
                    <Grid item xs={3}>
                        <b>DescriptionAlerts</b><div>&nbsp;</div>
                        <DescriptionAlerts />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AlertPage;