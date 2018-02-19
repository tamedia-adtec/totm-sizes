module.exports = {

    'inside-full-top': {

        options : {
          loadingRatio : 0.66
        },

        dfp: {
            sizes: [[320,50], [320,64], [320, 160], [728,90], [970,250], [994,118], [994,250]]
        },

        appnexus: {
            sizes: [[994, 250], [994, 118], [970, 250], [728, 90], [320, 160], [320, 64], [320, 50]]
        }
    },

    'inside-full': {

        options : {
            loadingRatio : 0.66
        },

        dfp: {
            sizes: [[300, 250], [320, 50], [320, 64], [320, 160], [336, 280], [728, 90], [970, 250], [994, 118], [994, 250]]
        },

        appnexus: {
            sizes: [[994, 250], [970, 250],[728, 90],[300, 250], [320, 160], [320, 50],[320, 64]]
        },

        forcedSizes: {
            all : [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-half': {
        dfp: {
            sizes : []
        },
        appnexus: {
            sizes : []
        }
    },

    'gallery': {
        dfp: {
            sizes: []
        },
        appnexus: {
            sizes: []
        }
    },


    'inside-quarter': {
        dfp: {
            sizes : [[300,250]]
        },
        appnexus: {
            sizes : [300,250]
        }
    },


    'outside-right-pos': {
        dfp: {
            sizes : []
        },
        appnexus: {
            sizes : []
        }
    },

    'outside-right': {
        options : {
            percentageViewable : 50
        },
        dfp: {
            sizes : [[160, 600], [245, 770], [300, 600]]
        },
        appnexus: {
            sizes : [[160, 600], [245, 770], [300, 600]]
        }
    },
    'outside-left': {
        dfp: {
            sizes : []
        },
        appnexus: {
            sizes : []
        }
    },
    'content-ad': {
        dfp: {
            sizes : []
        },
        appnexus: {
            sizes : []
        }
    },
}
