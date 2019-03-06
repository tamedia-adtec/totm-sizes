module.exports = {

    //add 500x1000 to test sitebars DASB-1194
    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    // DASB-1294
    'inside-quarter-direct': {
        sizes: {
            dfp: [[300, 150]]
        }
    },

    'inside-full-top': {
        blockedSizes: {
            dfp: [[994, 500]],
            appnexus: [[994, 500]]
        }
    },


    'inside-full-direct': {
        sizes: {
            dfp: [[300, 150]]
        }
    },

    // remove size ADT-658
    'content-ad': {

        sizes: {
            dfp: [[1, 1]]
        },


        blockedSizes: {
            dfp: [[300, 250]],
            appnexus: [[300, 250]]
        }
    }
};
