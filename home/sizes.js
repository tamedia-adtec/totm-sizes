module.exports = {

    'inside-full-top': {
        blockedSizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        }

    },

    'inside-full': {
        sizes: {
            dfp: [[468, 60]],
            appnexus: []
        },

        blockedSizes: {
            dfp: [[970, 250], [994, 118], [994, 250], [994, 500]],
            appnexus: [[970, 250], [994, 118], [994, 250], [994, 500]]
        }

    },


    'outside-right-pos': {
        sizes: {
            dfp: [[235, 120]],
            appnexus: []
        }
    },

    'outside-right': {
        // remove 500x1000 ADT-865
        blockedSizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    }
};
