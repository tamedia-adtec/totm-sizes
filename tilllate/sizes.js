module.exports = {

    'overlay' : {

        sizes : {
            dfp : [[1, 1], [320, 480], [480, 320], [768, 1024], [1024, 768], [1239, 800], [1920, 1080]],
            appnexus : []
        }

    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416],[640, 400]],
            appnexus: [[320, 416],[640, 400]]
        },

        blockedSizes: {
            dfp: [[970, 250], [994, 118], [994, 250]],
            appnexus: [[994, 250], [994, 118], [970, 250]]
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

    'outside-left': {

        sizes : {
            dfp: [[160, 600]],
            appnexus : []
        }
    },
    'content-ad': {
        sizes : {
            dfp: [[1,1]],
            appnexus : []
        }
    }
};
