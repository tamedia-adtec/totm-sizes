module.exports = {
    'inside-full': {
        sizes: {
            dfp: [[320, 416], [640, 400]],
            appnexus: [[320, 416]]
        }
    },

    'inside-full-top': {
        sizes: {
            dfp: [[320, 416]],
            appnexus: [[320, 416]]
        },
        blockedSizes: {
            dfp: [],
            appnexus: [[994, 500]]
        }
    },

    'inside-full-pos1': {
        sizes: {
            dfp: [[320, 416], [300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [970, 250], [994, 118], [994, 250], [300, 600], [960, 800]],
            appnexus: [[320, 416], [994, 250], [970, 250], [728, 90], [300, 250], [320, 160], [320, 50], [320, 64]]
        }
    },
    'inside-quarter': {
        blockedSizes: {
            dfp: [[300, 600]],
            appnexus: [[300, 600]]
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    'outside-left': {
        sizes: {
            dfp: [[160, 600], [300, 600], [245, 770]],
            appnexus: [[160, 600], [300, 600], [245, 770]]
        }
    },

    'content-ad': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },
    'paid-inside': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },
};
