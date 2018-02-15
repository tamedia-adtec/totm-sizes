export default {

    'inside-full-top': {

        options : {
          loadingRatio : 0.66
        },

        dfp: {
            sizes: [[278, 70], [300, 50], [300, 250], [320, 50], [320, 64], [320, 160], [320, 416], [336, 280], [640, 400], [720, 145], [728, 90], [760, 190], [760, 420], [890, 107], [970, 250], [994, 118], [994, 250], [994, 550]],
        },

        appnexus: {
            sizes: [[994, 250], [994, 118], [970, 250], [728, 90], [720, 145], [320, 160], [320, 64], [320, 50], [300, 50]]
        }
    },

    'inside-full': {

        options : {
            loadingRatio : 0.66
        },

        dfp: {
            sizes: [[278, 70], [300, 50], [300, 250], [320, 50], [320, 64], [320, 160], [320, 416], [336, 280], [640, 400], [720, 145], [728, 90], [760, 190], [760, 420], [890, 107], [970, 250], [994, 118], [994, 250], [994, 550]]
        },

        appnexus: {
            sizes: [[994, 250], [970, 250], [720, 145], [414, 455], [320, 416], [320, 160], [320, 50], [300, 250], [300, 50]]
        },

        forcedSizes: {
            all : [],
            mobile: [[828, 910]],
            desktop: [[960, 800]]
        }
    },

    'inside-half': {
        dfp: {
            sizes : [[300, 250], [468, 400], [640, 400]]
        },
        appnexus: {
            sizes : [[300, 250], [468, 400], [640, 400]]
        }
    },

    'gallery': {
        dfp: {
            sizes: [[300, 250], [336, 280], [468, 400], [640, 400]]
        },
        appnexus: {
            sizes: [[300, 250], [468, 400], [640, 400]]
        }
    },


    'inside-quarter': {
        dfp: {
            sizes : [[300,250]]
        },
        appnexus: {
            sizes : []
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
            sizes : []
        },
        appnexus: {
            sizes : []
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
    }
}
