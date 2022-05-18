import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ComboBox from '../../components/Autocomplete/ComboBox';
import ContrySelect from '../../components/Autocomplete/ContrySelect';
import Grouped from '../../components/Autocomplete/Grouped';
import CustomizedHook from '../../components/Autocomplete/CustomizedHook';
import CheckboxesTags from '../../components/Autocomplete/CheckboxesTags';

const AutocompletePage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin:20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>Combo box</b>
                        <ComboBox />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Contry Select</b>
                        <ContrySelect />
                    </Grid>
                    <Grid item xs={3}>
                        <b>Grouped</b>
                        <Grouped />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CustomizedHook</b>
                        <CustomizedHook />
                    </Grid>
                    <Grid item xs={3}>
                        <b>CheckboxesTags</b>
                        <CheckboxesTags />
                    </Grid>
                </Grid>
            </div>            
        </div>
    );
};

export default AutocompletePage;