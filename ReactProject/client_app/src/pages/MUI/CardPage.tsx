import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicCard from '../../components/Card/BasicCard';
import OutlinedCard from '../../components/Card/OutlinedCard';
import RecipeReviewCard from '../../components/Card/RecipeReviewCard';
import ImgMediaCard from '../../components/Card/ImgMediaCard';

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
                    <Grid item xs={3}>
                        <b>RecipeReviewCard</b><div>&nbsp;</div>
                        <RecipeReviewCard />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ImgMediaCard</b><div>&nbsp;</div>
                        <ImgMediaCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CardPage;