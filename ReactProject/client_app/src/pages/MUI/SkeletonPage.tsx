import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from '../../components/Progress/CircularIndeterminate';
import Variants from '../../components/Skeleton/Variants';
import Animations from '../../components/Skeleton/Animations';
import YouTube from '../../components/Skeleton/YouTube';
import Facebook from '../../components/Skeleton/Facebook';

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
                    <Grid item xs={3}>
                        <b>Animations</b><div>&nbsp;</div>
                        <Animations />
                    </Grid>
                    <Grid item xs={3}>
                        <b>YouTube</b><div>&nbsp;</div>
                        <YouTube />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Facebook</b><div>&nbsp;</div>
                        <Facebook />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SkeletonPage;