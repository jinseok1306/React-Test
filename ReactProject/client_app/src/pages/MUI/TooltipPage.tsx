import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicTooltip from '../../components/Tooltip/BasicTooltip';
import ArrowTooltips from '../../components/Tooltip/ArrowTooltips';

const TooltipPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>BasicTooltip</b><div>&nbsp;</div>
                        <BasicTooltip />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ArrowTooltips</b><div>&nbsp;</div>
                        <ArrowTooltips />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TooltipPage;