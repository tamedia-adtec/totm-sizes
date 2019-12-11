module.exports = {
    // add extra sizes PP-664, ADT-395
    'inside-full-top': {
        sizes: {
            dfp: [[720,145],[1024,122], [320,250], [300,250]],
            appnexus: []
        },

        forcedSizes: {
            all: [],
            mobile: [[320, 160]],
            desktop: []
        }
    },
    // add extra sizes PP-664, ADT-395, ADT-609
    'inside-full': {
        sizes: {
            dfp: [[320, 416],[720,145], [320,250], [320,480], [300,600]],
            appnexus: [[320, 416],[300, 600]]
        }
    },

    'gallery': {
        sizes : {
            dfp: [[468, 400]],
            appnexus : [[468, 400]]
        }
    },

    'inside-half': {
        sizes : {
            dfp: [[468, 400]],
            appnexus : [[468, 400]]
        }
    },

    'outside-right': {
        sizes : {
            dfp: [[500, 1000]],
            appnexus : [[500, 1000]]
        }
    },
    'content-ad': {
        sizes : {
            dfp: [[1,1]],
            appnexus : []
        }
    },
    'branding_quarter': {
        sizes : {
            dfp: [[300,250]],
            appnexus : []
        }
    },
    'branding_half': {
        sizes : {
            dfp: [[468,400], [640, 400]],
            appnexus : []
        }
    },
    'paid-inside':{
        sizes : {
            dfp: [[1,1]],
            appnexus : []
        }
    }

};
