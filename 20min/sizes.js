module.exports = {
    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [336, 280], [728, 250], [994, 560],[1200, 250], [1200, 500]],
            appnexus: [[300, 250],[300, 200]]
        }
    },


    'inside-brandday': {
        options: {
            loadingRatio: 0.5
        },
        sizes: {
            dfp: [[994, 500], [728, 250]],
            appnexus: []
        }
    },


    'inside-full': {
        sizes: {
            dfp: [[320, 416], [760, 420], [300, 600], [728, 250], [1200, 250], [320, 480]],
            appnexus: [[320, 416], [300, 600],[320, 480]]
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },


    'inside-full-pos1': {
        overwrites: 'inside-full',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-full-pos3': {
        overwrites: 'inside-full',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-full-pos5': {
        overwrites: 'inside-full',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-pos': {
        sizes: {
            dfp: [[300, 600], [320, 480]], //DASB-2741
            appnexus: [[300, 600], [320, 480]]//DASB-2741
        },
    },

    'inside-pos3': {
        overwrites: 'inside-pos',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-pos5': {
        overwrites: 'inside-pos',
        blockedSizes: {"dfp": [[320, 480]], "appnexus": [[320, 480]]},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-pos6': {
        overwrites: 'inside-pos',
        blockedSizes: {"dfp": [], "appnexus": []},
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-full-content': {
        sizes: {
            dfp: [[320, 416], [320, 480]],
            appnexus: [[320, 416], [320, 480]]
        },
        forcedSizes: {
            all: [],
            mobile: [[300, 600],[300, 250]], //DASB-4692
            desktop: []
        }
    },

    'inside-full-comment': {
        extends : 'inside-full',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [],
            desktop: [[320,416], [300,250]]
        }
    },

    'inside-full-content-pos3': {
        overwrites: 'inside-full-content',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800], [320, 416]]
        }
    },

    'inside-full-content-pos5': {
        overwrites: 'inside-full-content',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800], [320, 416]]
        }
    },


    'inside-full-content-end': {
        sizes: {
            dfp: [[300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [728, 250], [970, 250], [994, 118], [994, 250], [320, 416], [300, 600]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 50], [320, 64], [320, 416], [300, 600]]
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910], [320, 416]]
        }
    },
    'inside-full-recommender': {
        sizes: {
            dfp: [[1, 1], [300, 250]],
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
            dfp: [[1, 1], [300, 250]],
            appnexus: [[300, 250]]
        }
    },

    'inside-full-sticky': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'inside-sticky': {
        extends: "inside-full-sticky"
    },

    'outside-full-welcome': {
        sizes: {
            dfp: [[1200, 250], [994, 250], [300, 250]],
            appnexus: []
        }
    },

    'outside-welcome': {
        extends: 'outside-full-welcome'
    },

    'partner-ad' : {
        sizes: {
            dfp: [[1,1],[320,180],[200,250],[176,250],[294,250],[250,250],[309,250]],
            appnexus: []
        }
    },

    'inside-gallery': {
        sizes: {
            dfp: [[1,1],[300,250]],
            appnexus: [[300,250]]
        }
    }
};
