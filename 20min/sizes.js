module.exports = {
    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [336, 280],[728,250],[1200,250],[1200,500]],
            appnexus: [[300, 250]]
        }
    },

    'inside-full-brandday': {
        options: {
            loadingRatio: 0.5
        },
        sizes: {
            dfp: [[994, 500], [320, 160], [728, 250]],
            appnexus: [[320, 416]]
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416], [760, 420], [994, 550],[300,600],[728,250],[1200,250],[320,480]],
            appnexus: [[320, 416],[300,600]]
        },
        forcedSizes: {
            all: [],
            //to force this size on tablet
            mobile: [[300, 250], [300, 600]]
        }
    },
    'inside-full-content': {
        sizes: {
            dfp: [[320, 416],[300,600]],
            appnexus: [[320, 416],[300,600]]
        }
    },

    'inside-full-recommender': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'gallery': {
        sizes: {
            dfp: [[468, 400]],
            appnexus: [[468, 400]]
        }
    },

    'inside-half': {
        sizes: {
            dfp: [[468, 400], [480, 240]],
            appnexus: [[468, 400], [480, 240]]
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
            dfp: [[160, 600]],
            appnexus: []
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
            dfp: [[1, 1],[300,250]],
            appnexus: [[300,250]]
        }
    },

    'inside-full-sticky': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'outside-full': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    }
};
