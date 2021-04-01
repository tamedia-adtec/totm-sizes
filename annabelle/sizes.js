module.exports = {
    'inside-quarter': {
        sizes: {
            dfp: [[300, 600]],
            appnexus: [[300, 600]]
        }
    },

    'inside-full-pos1': {
        sizes: {
            dfp: [[300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [970, 250], [994, 118], [994, 250], [300, 600], [320, 416]],
            appnexus: [[994, 250], [970, 250], [728, 90], [300, 250], [320, 160], [320, 50], [320, 64],[320, 416]]
        }
    },
    'inside-full': {
        sizes: {
            dfp: [[320, 416]],
            appnexus: [[320, 416]]
        }
    },

    'inside-full-content': {
        blockedSizes: {
            dfp: [[960, 800],[828, 910]],
            appnexus: [[960, 800],[828, 910]]
        },
        forcedSizes: {
            all: [[320, 416]]
        }
    },
    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },
    'paid-inside': {
        sizes: {
            dfp: [[1, 1],[300,250]],
            appnexus: []
        }
    },
};
