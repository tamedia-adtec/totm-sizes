module.exports = {
    'inside-full-top': {
        sizes: {
            dfp: [],
            appnexus: []
        },
        blockedSizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        }
    },

    'inside-full': {
        sizes: {
            dfp: [300,600],
            appnexus: []
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },

    'inside-full-content': {

        extends : "inside-full-content",

        sizes: {
            dfp: [[320,416]],
            appnexus: [[320,416]]
        },
        blockedSizes: {
            dfp: [[960, 800], [828, 910]],
            appnexus: [[960, 800], [828, 910]]
        }
    },

    'outside-right': {
    sizes: {
        dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
    }
},
};
