module.exports = {
    'overlay': {
        sizes: {
            dfp: [[1, 1], [320, 480], [480, 320], [768, 1024], [1024, 768], [1239, 800], [1920, 1080]],
            appnexus: []
        }
    },
    'inside-full-top': {
        sizes: {
            dfp: [[320, 150]],
            appnexus: [[320, 150]]
        }
    },

    'inside-full': {
        sizes: {
            dfp: [[320, 416], [320, 150], [320, 480]],
            appnexus: [[320, 416], [320, 150], [320, 480]]
        }
    },


    'outside-right-pos': {
        sizes: {
            dfp: [[160, 600], [245, 770], [300, 600], [500, 1000]],
            appnexus: []
        }
    },

    'outside-right': {
        sizes: {
            dfp: [[500, 1000]],
            appnexus: [[500, 1000]]
        }
    },

    'inside-full-recommender': {
        sizes: {
            dfp: [[1, 1], [300, 250]],
            appnexus: []
        }
    },


    'gallery': {
        sizes: {
            dfp: [[468, 400]],
            appnexus: [[468, 400]]
        }
    },

    'inside-half': {
        sizes: {
            dfp: [[468, 400], [470, 470]],
            appnexus: [[468, 400]]
        }
    },

    'content-ad': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'outside-full-welcome': {
        sizes: {
            dfp: [[1200, 250], [994, 250], [300, 250]],
            appnexus: []
        }
    },

    'outside-welcome': {
        extends: 'outside-full-welcome'
    },

    'inside-full-sticky': {
        sizes: {
            dfp: [[1, 1]],
            appnexus: []
        }
    },

    'inside-sticky': {
        extends: "inside-full-sticky"
    },

    'inside-pos1': {
        extends : 'inside-full',
        blockedSizes: {
            dfp: [[300,600],[320,480]],
            appnexus: [[300,600],[320,480]]
        }
    },


};
