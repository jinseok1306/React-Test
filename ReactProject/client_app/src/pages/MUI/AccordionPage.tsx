import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import SimpleAccordion from '../../components/Accordion/SimpleAccordion';
import ControlledAccordions from '../../components/Accordion/ControlledAccordions';

const AccordionPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <b>SimpleAccordion</b><div>&nbsp;</div>
                        <SimpleAccordion />
                    </Grid>
                    <Grid item xs={4}>
                        <b>ControlledAccordions</b><div>&nbsp;</div>
                        <ControlledAccordions />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AccordionPage;