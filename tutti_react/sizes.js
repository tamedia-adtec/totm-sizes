module.exports = {

    'inside-full-top': {
        blockedSizes: {
            dfp: [[728, 90]],
            appnexus: [[728, 90]]
        }
    },

    'inside-full-native': {
        sizes: {
            dfp: [[320, 160]],
            appnexus: []
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[278, 70], [278, 40], [300, 150], [320, 416], [300, 600], [160, 600]],
            appnexus: [[320, 416], [300, 600], [160, 600]]
        },
        blockedSizes: {
            dfp: [],
            appnexus: [[828, 910],[960, 800]]
        }
    },

    'inside-full-pos1': {
        extends : "inside-full",
        sizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        },
    },

    'content-ad': {
        sizes: {
            dfp: [[278, 40]],
            appnexus: []
        }
    },

    'inside-quarter': {
        sizes: {
            dfp: [[278, 70], [300, 30], [300, 150]],
            appnexus: [[278, 70], [300, 30], [300, 150]]
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    }
};
