module.exports = {
    // add extra sizes PP-664, ADT-395
    'inside-full-top': {
        sizes: {
            dfp: [[720, 145], [1024, 122], [994, 560], [320, 250], [300, 200]],
            appnexus: [[300, 200], [994, 560]]
        },

        forcedSizes: {
            all: [],
            mobile: [[320, 160]],
            desktop: []
        }
    },

    'inside-full-topnews': {
        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[320, 67]],
            mobile: [[1024, 206]],
            desktop: [[994, 100], [994, 150]]
        }

    },


    // add extra sizes PP-664, ADT-395, ADT-609
    'inside-full': {
        sizes: {
            dfp: [[320, 416], [720, 145], [320, 250], [320, 480], [300, 600]],
            appnexus: [[320, 416], [300, 600]]
        }
    },

    // add extra sizes PP-664, ADT-395, ADT-609
    'inside-full-brandday': {
        sizes: {
            dfp: [[320, 160]],
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
            dfp: [[468, 400]],
            appnexus: [[468, 400]]
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000], [300, 600]],
            appnexus: [[500, 1000]]
        }
    },
    'content-ad': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },
    'branding_quarter': {
        sizes: {
            dfp: [[300, 250]],
            appnexus: [[1, 1]]
        }
    },
    'branding_half': {
        sizes: {
            dfp: [[468, 400], [640, 400]],
            appnexus: [[1, 1]]
        }
    },
    'paid-inside': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },
    'inside-quarter': {
        sizes: {
            dfp: [[320, 416], [300, 250]],
            appnexus: [[320, 416], [300, 250]]
        }
    },

};
