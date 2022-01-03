module.exports = {

    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [1200, 250],[300,200]],
            appnexus: [[760, 190], [300, 250],[300,200]]
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

    'inside-full-recommender': {
        sizes: {
            dfp: [],
            appnexus: []
        }
    },

    'inside-pos':{
        sizes: {
            dfp: [[320, 480]], //DASB-2741
            appnexus: [[320, 480]]//DASB-2741
        },
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
};
