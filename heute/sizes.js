module.exports = {

    'inside-full-top': {
        overwrites: 'inside-full-top',
        sizes: {
            dfp: [[300, 50], [300, 100], [300, 250], [300, 600], [320, 50], [320, 100], [320, 160], [320, 250], [320, 480], [336, 280], [728, 90], [728, 250], [994, 550], [960, 250], [960, 100], [960, 90], [970, 100], [970, 90], [970, 250], [800, 250], [980, 240], [980, 250], [994, 118], [994, 250]],
            appnexus: []

        },
        blockedSizes: {
            dfp: [],
            appnexus: []
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416], [300, 1], [320, 250], [320, 480], [300, 50], [320, 50], [300, 600], [336, 280], [320, 100], [300, 100], [320, 320], [250, 250], [200, 200]],
            appnexus: []
        },
        blockedSizes: {
            dfp: [[828, 910], [960, 800]],
            appnexus: [[828, 910], [960, 800]]
        }
    },

    'inside-full-pos1': {
        overwrites: 'inside-full',
        sizes: {
            dfp: [[300, 250], [320, 250]],
            appnexus: [[300, 250], [320, 250]]
        },
        forcedSizes: {
            all: [],
            mobile: [[300, 600], [320, 480], [320, 160], [336, 280], [320, 50], [300, 50], [300, 100]],
            desktop: []
        },
        blockedSizes: {
            dfp: [],
            appnexus: []
        }
    },

    'inside-full-pos2': {
        overwrites: 'inside-full',
        sizes: {
            dfp: [[300, 250], [320, 250], [300, 1]],
            appnexus: [[300, 250], [320, 250], [300, 1], [560, 350]]
        },
        forcedSizes: {
            all: [],
            mobile: [[300, 600], [320, 480], [320, 160], [336, 280], [320, 50], [300, 50], [300, 100]],
            desktop: [[560, 350]]
        }
    },
    'inside-full-pos3': {
        overwrites: 'inside-full',
        forcedSizes: {
            all: [],
            mobile: [[300, 250], [320, 250], [300, 600], [320, 480], [320, 160], [336, 280], [320, 50], [300, 50], [300, 100]],
            desktop: []
        },
        blockedSizes: {
            dfp: [[320, 320], [250, 250], [200, 200]],
            appnexus: [[320, 320], [250, 250], [200, 200]]
        }
    },

    'inside-half': {
        sizes: {
            dfp: [[468, 400], [300, 250]],
            appnexus: []
        }
    },

    'outside-right': {
        overwrites: 'outside-right',
        sizes: {
            dfp: [[160, 600], [300, 600], [500, 1000]],
            appnexus: [[160, 600], [300, 600], [500, 1000]]
        },
        blockedSizes: {
            dfp: [[245, 770]],
            appnexus: [[245, 770]]
        }
    },

    'outside-left': {

        sizes: {
            dfp: [[160, 600]],
            appnexus: []
        }
    },
    'inside-quarter-pos1': {
        sizes: {
            dfp: [[1, 1], [300, 250]],
            appnexus: [[1, 1], [300, 250]]
        }
    },
    'inside-third': {
        sizes: {
            dfp: [[1, 1], [300, 250], [300, 600]],
            appnexus: [[1, 1], [300, 250], [300, 600]]
        }
    }
};
