module.exports = {

    'inside-full': {
        options: {
            loadingRatio: 0.62
        },
        // DASB-811 640x320
        sizes: {
            dfp: [[278, 70], [278, 40], [278, 41], [640, 320]],
            appnexus: []
        }
    },

    'inside-full-top': {
        options: {
            loadingRatio: 0.62
        },
        // DASB-811 640x320
        sizes: {
            dfp: [[640, 320]],
            appnexus: []
        },
        blockedSizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        }
    },

    'inside-full-footer': {
        options: {
            loadingRatio: 0.62
        },
        sizes: {
            dfp: [[300, 250], [320, 50], [320, 64], [320, 160], [320, 416], [336, 280], [728, 90], [728, 250], [970, 250], [994, 118], [994, 250]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 416], [320, 50], [320, 64]]
        },
        blockedSizes: {
            dfp: [[960, 800]],
            appnexus: [[960, 800]]
        }
    },

    //ADT-1359
    'inside-quarter-direct': {
        sizes: {
            dfp: [[300, 150]],
            appnexus: []
        }
    },

    //ADT-1359
    'inside-full-direct': {
        sizes: {
            dfp: [[300, 150]],
            appnexus: []
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    'inside-full-searchbox': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'inside-quarter-infobox-pos': {
        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[278, 41]]
        }
    },

    'inside-quarter-textlink-pos': {
        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[278, 40]]
        }
    },

    'inside-quarter-servicebox-pos': {
        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[278, 70]]
        }
    }

};
