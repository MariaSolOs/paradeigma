import { keyframes, styled } from '@mui/material/styles';

import MuiBackdrop from '@mui/material/Backdrop';

const SPINNER_COLOR = '#000';
const SPINNER_WIDTH = 20;

const spinAnimation = keyframes`
    0% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    6.25% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    12.5% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    18.75% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    25% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    31.25% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    37.5% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    43.75% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }

    50% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    56.25% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    62.5% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    68.75% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    75% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 transparent, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    81.25% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    87.5% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR},
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    93.75% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR};
    }

    100% {
        box-shadow: 
            0 -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px 0 ${SPINNER_COLOR}, 
            ${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            ${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px ${SPINNER_COLOR}, 
            0 ${3 * SPINNER_WIDTH}px transparent, 
            -${SPINNER_WIDTH}px ${3 * SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px ${2 * SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px ${SPINNER_WIDTH}px transparent, 
            -${3 * SPINNER_WIDTH}px 0 transparent, 
            -${3 * SPINNER_WIDTH}px -${SPINNER_WIDTH}px transparent, 
            -${2 * SPINNER_WIDTH}px -${2 * SPINNER_WIDTH}px transparent,
            -${SPINNER_WIDTH}px -${3 * SPINNER_WIDTH}px transparent;
    }
`;

export const Backdrop = styled(MuiBackdrop)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.main}60`,
    zIndex: 5
}));

export const Spinner = styled('div')({
    animation: `${spinAnimation} 1s linear infinite`,
    height: SPINNER_WIDTH,
    width: SPINNER_WIDTH,
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: -SPINNER_WIDTH / 2
});
