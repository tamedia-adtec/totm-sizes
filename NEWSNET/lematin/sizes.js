module.exports = {

    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [1200, 250],[300,200], [994, 560]],
            appnexus: [[760, 190], [300, 250],[300,200], [994, 560]]
        },

        forcedSizes: {
            all: [],
            mobile: [],
            desktop: [[728, 90]]
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416], [300, 600], [994, 550], [760, 420], [300, 600],[320,480]],
            appnexus: [[320, 416], [300, 600]]
        },
        forcedSizes: {
            all: [[300, 250]],
            mobile: [],
            desktop: []
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },

    'inside-full-pos1': {
        extends : 'inside-full',
        sizes: {
            dfp: [[994, 560]],
            appnexus: [[994, 560]]
        }
    },

    'inside-full-content': {
        sizes: {
            dfp: [[300, 250],[320,416],[300,600]],
            appnexus: [[300, 250],[320,416],[300,600]]
        },

        forcedSizes: {
            all: [],
            mobile: [],
            desktop: [[300, 250]]
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
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'inside-pos':{
        sizes: {
            dfp: [[320, 480]], //DASB-2741
            appnexus: [[320, 480]]//DASB-2741
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },

    'inside-pos3': {
        overwrites : 'inside-pos',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-pos6': {
        overwrites : 'inside-pos',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-sticky': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },
    'inside-full-recommender': {
        sizes: {
            dfp: [[1, 1], [300, 250]],
            appnexus: []
        }
    },

    'outside-welcome': {
        sizes: {
            dfp: [[1200, 250],[994,250],[300,250]],
            appnexus: []
        }
    }
};
