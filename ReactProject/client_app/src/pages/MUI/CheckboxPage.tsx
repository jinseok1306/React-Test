import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import Checkboxes from '../../components/Checkbox/Checkboxes';
import CheckboxLabels from '../../components/Checkbox/CheckboxLabels';
import IndeterminateCheckbox from '../../components/Checkbox/IndeterminateCheckbox';
import FormControlLabelPosition from '../../components/Checkbox/FormControlLabelPosition';

const CheckboxPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>Checkboxes</b>
                        <Checkboxes />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CheckboxLabels</b>
                        <CheckboxLabels />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IndeterminateCheckbox</b>
                        <IndeterminateCheckbox />
                    </Grid>
                    <Grid item xs={3}>
                        <b>FormControlLabelPosition</b>
                        <FormControlLabelPosition />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CheckboxPage;