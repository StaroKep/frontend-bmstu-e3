import React from 'react';

import anchor from 'src/constants/anchor';

export const Anchor = props => {
    const { name } = props;

    const styles = {
        position: 'absolute',
        top: '-60px',
    };

    return <a id={anchor[name]} style={styles} />;
};
