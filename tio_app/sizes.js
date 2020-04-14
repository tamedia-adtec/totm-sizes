module.exports = {

    'overlay' : {
        sizes : {
            dfp : [[1, 1], [320, 480], [480, 320], [768, 1024], [1024, 768], [1239, 800], [1920, 1080]],
            appnexus : []
        }
    },


    // add extra sizes PP-664, ADT-395, ADT-1061
    'inside-full-top': {
        sizes: {
            dfp: [[720,145],[1024,122], [320,250], [300,250]],
            appnexus: []
        }
    },

    // request from Dani J. 9.4.2020
    'inside-full-topnews': {
        sizes: {
            dfp: [],
            appnexus: []
        },

        forcedSizes: {
            all: [[320,67]],
            mobile: [[1024, 206]],
            desktop: [[994,100],[994,150]]
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
    'paid-inside':{
        sizes : {
            dfp: [[1,1]],
            appnexus : []
        }
    }

};
