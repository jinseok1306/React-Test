import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import SimpleBadge from '../../components/Badge/SimpleBadge';
import BadgeVisibility from '../../components/Badge/BadgeVisibility';

const BadgePage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>SimpleBadge</b><div>&nbsp;</div>
                        <SimpleBadge />
                    </Grid>
                    <Grid item xs={3}>
                        <b>BadgeVisibility</b><div>&nbsp;</div>
                        <BadgeVisibility />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default BadgePage;