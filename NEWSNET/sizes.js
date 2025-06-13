module.exports = {

    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [320, 155], [1200, 250], [300, 200], [320, 416], [994, 233]],
            appnexus: [[760, 190], [300, 250], [300, 200], [320, 155], [320, 416], [994, 233]]
        },

        forcedSizes: {
            all: [],
            mobile: [],
            desktop: [[728, 90]]
        },
        blockedSizes: {
            dfp: [[994, 500], [994, 560], [994, 118], [728, 90]],
            appnexus: [[994, 500], [994, 560], [994, 118], [728, 90], [760, 190]]
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416], [300, 600], [760, 420], [300, 600], [320, 480], [994, 500], [320, 481], [994, 501]],
            appnexus: [[320, 416], [300, 600], [994, 500], [320, 481], [994, 501], [994, 251], [300, 251]]
        },
        forcedSizes: {
            all: [[300, 250]],
            mobile: [[320, 569]],
            desktop: [[371, 660], [338, 600]]
        }
    },

    'inside-full-pos1': {
        extends: 'inside-full',
        options: {
            explicit: true // this config will only work for pos1 not for pos10 or pos11
        },
        sizes: {
            dfp: [[994, 560], [300, 200]],
            appnexus: [[994, 560], [300, 200]]
        }
    },

    'inside-full-content': {
        sizes: {
            dfp: [[300, 250], [320, 416], [300, 600], [994, 500], [320, 481], [994, 501]],
            appnexus: [[300, 250], [320, 416], [300, 600], [994, 500], [320, 481], [994, 501], [994, 251], [300, 251]]
        },

        forcedSizes: {
            all: [],
            mobile: [[320, 569]],
            desktop: [[371, 660], [338, 600], [300, 250]]
        }
    },
    'inside-full-content-pos1': {
        extends: 'inside-full-content',
        sizes: {
            dfp: [[994, 560], [300, 200]],
            appnexus: [[994, 560], [300, 200]]
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


    'inside-half': {
        sizes: {
            dfp: [[640, 400]],
            appnexus: [[640, 400]]
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

    'inside-full-recommender': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'inside-quarter': {
        sizes: {
            dfp: [[926, 380], [447, 380], [287, 320], [320, 380], [728, 250], [300, 416], [300, 250]],
            appnexus: []
        }
    }
}
