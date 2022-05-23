import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import HorizontalLinearStepper from '../../components/Stepper/HorizontalLinearStepper';
import HorizontalNonLinearStepper from '../../components/Stepper/HorizontalNonLinearStepper';
import HorizontalLabelPositionBelowStepper from '../../components/Stepper/HorizontalLabelPositionBelowStepper';
import HorizontalStepperWithError from '../../components/Stepper/HorizontalStepperWithError';

const StepperPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <b>HorizontalLinearStepper</b><div>&nbsp;</div>
                        <HorizontalLinearStepper />
                    </Grid>
                    <Grid item xs={4}>
                        <b>HorizontalNonLinearStepper</b><div>&nbsp;</div>
                        <HorizontalNonLinearStepper />
                    </Grid>
                    <Grid item xs={4}>
                        <b>HorizontalLabelPositionBelowStepper</b><div>&nbsp;</div>
                        <HorizontalLabelPositionBelowStepper />
                    </Grid>
                    <Grid item xs={4}>
                        <b>HorizontalStepperWithError</b><div>&nbsp;</div>
                        <HorizontalStepperWithError />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default StepperPage;