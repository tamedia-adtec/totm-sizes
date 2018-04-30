module.exports = {
    'outside-right': {
      sizes: {
          dfp: [[500, 1000]],
          appnexus: [[500, 1000]]
      }
  },
    // remove size ADT-658
    'content-ad': {

        sizes : {
            dfp : [[1,1]]
        },
        blockedSizes: {
            dfp: [[300, 250]],
            appnexus: [[300, 250]]
        }
    }
};
