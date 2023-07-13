module.exports = {

    'inside-full-pos1': {
        sizes: {
            dfp: [[728, 90], [970, 250], [994, 118], [994, 250], [300, 600]],
            appnexus: [[994, 250], [970, 250], [728, 90]]
        },
        forcedSizes: {
            all: [],
            mobile: [[300, 250], [320, 50], [320, 64], [320, 160], [320, 416], [336, 280],[828, 910]],
            desktop: [[960, 800]]

        }
    },
    'inside-full-top': {
        blockedSizes: {
            dfp: [],
            appnexus: [[994, 500],[994, 560]]
        }
    },
    'outside-left': {
        sizes: {
            dfp: [[160, 600], [300, 600], [245, 770]],
            appnexus: [[160, 600], [300, 600], [245, 770]]
        }
    },

    'paid-inside': {
        sizes: {
            dfp: [[1, 1],[300,250]],
            appnexus: [[300,250]]
        }
    },

    'inside-quarter': {
        sizes: {
            dfp: [[926,380],[447,380], [287,320],[320,380],[728,250],[300,416],[300,250]],
            appnexus: [[926,380],[447,380], [287,320],[320,380],[728,250],[300,416],[300,250]]
        }
    },


    'inside-half': {
        sizes: {
            dfp: [[642, 110]],
            appnexus: []
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    'content-ad': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    }
};
