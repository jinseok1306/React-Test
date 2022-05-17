import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import RadioButtonsGroup from '../../components/Radio/RadioButtonsGroup';
import RowRadioButtonsGroup from '../../components/Radio/RowRadioButtonsGroup';
import ErrorRadios from '../../components/Radio/ErrorRadios';

const RadioPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>RadioButtonsGroup</b><div>&nbsp;</div>
                        <RadioButtonsGroup />
                    </Grid>
                    <Grid item xs={3}>
                        <b>RowRadioButtonsGroup</b><div>&nbsp;</div>
                        <RowRadioButtonsGroup />
                    </Grid>
                    <Grid item xs={3}>
                        <b>ErrorRadios</b><div>&nbsp;</div>
                        <ErrorRadios />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default RadioPage;