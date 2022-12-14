import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ContinuousSlider from '../../components/Slider/ContinuousSlider';
import DiscreteSlider from '../../components/Slider/DiscreteSlider';
import DiscreteSliderValues from '../../components/Slider/DiscreteSliderValues';
import RangeSlider from '../../components/Slider/RangeSlider';
import InputSlider from '../../components/Slider/InputSlider';
import VerticalSlider from '../../components/Slider/VerticalSlider';
import TrackInvertedSlider from '../../components/Slider/TrackInvertedSlider';

const SliderPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>ContinuousSlider</b>
                        <ContinuousSlider />
                    </Grid>
                    <Grid item xs={3}>
                        <b>DiscreteSlider</b>
                        <DiscreteSlider />
                    </Grid>
                    <Grid item xs={3}>
                        <b>DiscreteSliderValues</b>
                        <DiscreteSliderValues />
                    </Grid>
                    <Grid item xs={3}>
                        <b>RangeSlider</b>
                        <RangeSlider />
                    </Grid>
                    <Grid item xs={3}>
                        <b>InputSlider</b>
                        <InputSlider />
                    </Grid>
                    <Grid item xs={3}>
                        <b>VerticalSlider</b>
                        <VerticalSlider />
                    </Grid>
                    <Grid item xs={3}>
                        <b>TrackInvertedSlider</b>
                        <TrackInvertedSlider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default SliderPage;