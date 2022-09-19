module.exports = {

    'inside-content': {
        sizes: {
            dfp: [[320, 416], [728, 90], [728, 250], [970, 250], [994, 118], [994, 250], [994, 500]],
            appnexus: [[320, 416], [728, 90], [728, 250], [970, 250], [994, 118], [994, 250], [994, 500]]
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-content-top': {
        extends: 'inside-content',
        dfp: [[300, 200]],
        appnexus: [[300, 200]],
        blockedSizes: {"dfp": [[960, 800]], "appnexus": [[960, 800]]},
    },

    'paid-inside': {
        sizes: {
            dfp: [[1, 1], [300, 250]],
            appnexus: [[300, 250]]
        }
    }
};
