module.exports = {

    'inside-full': {
        // DASB-811 640x320
        options : {
            loadingRatio : 0.62
        },
        sizes: {
            dfp: [[278, 70], [278, 40], [278, 41],[640,320]],
            appnexus: []
        }
    },


    'inside-full-top': {
        // DASB-811 640x320
        options : {
            loadingRatio : 0.62
        },
        sizes: {
            dfp: [[640,320]],
            appnexus: []
        }
    },

    //ADT-1359
    'inside-quarter-direct': {
        sizes: {
            dfp: [[300,150]],
            appnexus: []
        }
    },

    //ADT-1359
    'inside-full-direct': {
        sizes: {
            dfp: [[300,150]],
            appnexus: []
        }
    },

    'outside-right' : {
        blockedSizes : {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    'inside-full-searchbox' : {
        sizes : {
            dfp : [[1,1]],
            appnexus : []
        }
    },

    'inside-quarter-infobox-pos' : {
        sizes : {
            dfp : [],
            appnexus : []
        },

        forcedSizes : {
            all : [[278,41]]
        }
    },

    'inside-quarter-textlink-pos' : {
        sizes : {
            dfp : [],
            appnexus : []
        },

        forcedSizes : {
            all : [[278,40]]
        }
    },

    'inside-quarter-servicebox-pos' : {
        sizes : {
            dfp : [],
            appnexus : []
        },

        forcedSizes : {
            all : [[278,70]]
        }
    }

};
