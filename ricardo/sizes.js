module.exports = {
    'outside-right': {
      blockedSizes: {
           appnexus: [[500, 1000]]
       }
   },

   //add 500x1000 to test sitebars DASB-1194
   'outside-right': {
    sizes: {
         dfp: [[500, 1000]]
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
