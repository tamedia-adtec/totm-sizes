module.exports = {

    'inside-full-top': {
        options: {
            loadingRatio: 0.66
        },
        sizes : {
            dfp : [[300,250], [320,50], [320,64], [320, 160], [728,90], [970,250], [994,118], [994,250], [994,500]],
            appnexus : [[994,500], [994, 250], [994, 118], [970, 250], [728, 90], [320, 160], [320, 64], [320, 50], [1500, 600]]
        },

        forcedSizes: {
            all: [],
            mobile: [],
            desktop: [[728, 90]]
        }
    },

    'inside-full-brandday': {
        sizes: {
            dfp: [[1200, 250]],
            appnexus: []
        }
    },

    'inside-full': {
        options: {
            loadingRatio: 0.66
        },
        sizes: {
            dfp: [[300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [970, 250], [994, 118], [994, 250]],
            appnexus: [[994, 250], [970, 250], [728, 90], [300, 250], [320, 160], [320, 50], [320, 64]]
        },

        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-half': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'gallery': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },


    'inside-quarter': {
        sizes: {
            dfp: [[300, 250]],
            appnexus: [[300, 250]]
        }
    },

    'outside-right-pos': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'outside-right': {
        options: {
            percentageViewable: 50
        },
        sizes: {
            dfp: [[160, 600], [245, 770], [300, 600]],
            appnexus: [[160, 600], [245, 770], [300, 600]]
        }
    },
    'outside-left': {
        sizes: {
            dfp: [[160, 601],[300, 601]], // 160x601 DASB-1431
            appnexus: []
        }
    },
    'content-ad': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'video': {

        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[[640, 480]]]
        }
    }

};
