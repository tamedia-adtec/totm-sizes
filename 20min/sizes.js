module.exports = {
    'inside-full-top': {
        sizes: {
            dfp: [[760, 190], [300, 250], [336, 280],[728,250],[1200,250],[1200,500]],
            appnexus: [[300, 250]]
        },
        blockedSizes: {
            dfp: [[300, 200]],
            appnexus: [[300, 200]]
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
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },


    'inside-full-pos1': {
        options: {
            loadingRatio: 0.66
        },
        sizes: {
            dfp: [[300, 250],[300,600], [320, 50], [320, 64], [320, 160],[320,480], [320, 416], [336, 280], [728, 90], [728, 250], [760, 420], [970, 250], [994, 118], [994, 250], [994, 550],[1200,250]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 416], [320, 50], [320, 64],[300,600]]
        },

        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }

    },
    'inside-full-pos3': {
        options: {
            loadingRatio: 0.66
        },
        sizes: {
            dfp: [[300, 250],[300,600], [320, 50], [320, 64], [320, 160],[320,480], [320, 416], [336, 280], [728, 90], [728, 250], [760, 420], [970, 250], [994, 118], [994, 250],[994, 550],[1200,250]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 416], [320, 50], [320, 64],[300,600]]
        },

        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },
    'inside-full-pos5': {
        options: {
            loadingRatio: 0.66
        },
        sizes: {
            dfp: [[300, 250],[300,600], [320, 50], [320, 64], [320, 160],[320,480], [320, 416], [336, 280], [728, 90], [728, 250], [760, 420], [970, 250], [994, 118], [994, 250], [994, 550],[1200,250]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 416], [320, 50], [320, 64],[300,600]]
        },

        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-full-content': {
        sizes: {
            dfp: [[320, 416],[300,600]],
            appnexus: [[320, 416],[300,600]]
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910],[320,416]]
        }
    },

    'inside-full-content-pos1': {
        overwrite : 'inside-full-content',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800],[320,416]]
        }
    },

    'inside-full-content-pos3': {
        overwrite : 'inside-full-content',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800],[320,416]]
        }
    },

    'inside-full-content-pos5': {
        overwrite : 'inside-full-content',
        blockedSizes: {
            dfp: [],
            appnexus: []
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800],[320,416]]
        }
    },


    'inside-full-content-end': {
        sizes: {
            dfp: [[300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [728, 250], [970, 250], [994, 118], [994, 250],[320, 416],[300,600]],
            appnexus: [[994, 250], [970, 250], [728, 90], [728, 250], [300, 250], [320, 160], [320, 50], [320, 64],[320, 416],[300,600]]
        },
        blockedSizes: {
            dfp: [[960, 800],[828, 910]],
            appnexus: [[960, 800],[828, 910],[320,416]]
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

    'outside-full-welcome': {
        sizes: {
            dfp: [[1200, 250],[994,250],[300,250]],
            appnexus: []
        }
    }
};
