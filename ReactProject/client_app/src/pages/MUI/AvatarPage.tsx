import React, { useCallback, useState } from "react";
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import ImageAvatars from '../../components/Avatar/ImageAvatars';
import LetterAvatars from '../../components/Avatar/LetterAvatars';
import IconAvatars from '../../components/Avatar/IconAvatars';
import GroupAvatars from '../../components/Avatar/GroupAvatars';
import BadgeAvatars from '../../components/Avatar/BadgeAvatars';

const AvatarPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ margin: 20 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <b>ImageAvatars</b><div>&nbsp;</div>
                        <ImageAvatars />
                    </Grid>
                    <Grid item xs={3}>
                        <b>LetterAvatars</b><div>&nbsp;</div>
                        <LetterAvatars />
                    </Grid>
                    <Grid item xs={3}>
                        <b>IconAvatars</b><div>&nbsp;</div>
                        <IconAvatars />
                    </Grid>
                    <Grid item xs={3}>
                        <b>GroupAvatars</b><div>&nbsp;</div>
                        <GroupAvatars />
                    </Grid>
                    <Grid item xs={3}>
                        <b>BadgeAvatars</b><div>&nbsp;</div>
                        <BadgeAvatars />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AvatarPage;