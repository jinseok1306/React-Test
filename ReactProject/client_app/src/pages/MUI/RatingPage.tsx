import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import BasicRating from '../../components/Rating/BasicRating';
import HoverRating from '../../components/Rating/HoverRating';
import CustomizedRating from '../../components/Rating/CustomizedRating';
import RadioGroupRating from '../../components/Rating/RadioGroupRating';

const RatingPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>RadioButtonsGroup</b><div>&nbsp;</div>
                        <BasicRating />
                    </Grid>
                    <Grid item xs={3}>
                        <b>HoverRating</b><div>&nbsp;</div>
                        <HoverRating />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomizedRating</b><div>&nbsp;</div>
                        <CustomizedRating />
                    </Grid>
                    <Grid item xs={3}>
                        <b>RadioGroupRating</b><div>&nbsp;</div>
                        <RadioGroupRating />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default RatingPage;