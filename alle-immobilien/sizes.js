module.exports = {

    'inside-full-top': {

        blockedSizes: {
            dfp: [[970, 250], [994, 118], [994, 250], [994, 500]],
            appnexus: [[994, 250], [994, 118], [970, 250], [994, 500]]
        }

    },


    'inside-full': {

        blockedSizes: {
            dfp: [[970, 250], [994, 118], [994, 250]],
            appnexus: [[994, 250], [994, 118], [970, 250]]
        },
        sizes: {
            dfp: [[640, 320],[994,550],[320, 416]],
            appnexus: [[994,550],[320, 416]]
        },
        forcedSizes: {
            all: [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }

    }

};
