import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from '../../components/Progress/CircularIndeterminate';
import Variants from '../../components/Skeleton/Variants';

const SkeletonPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>Variants</b><div>&nbsp;</div>
                        <Variants />
                    </Grid>                    
                </Grid>
            </div>
        </div>
    );
};

export default SkeletonPage;