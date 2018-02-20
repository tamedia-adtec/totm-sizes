# How to use totm-sizes

In this repository you can configure adunit sizes for TOTM. These sizes will be build into the custom TOTMs build when TOTM gets deployed.
There is one default size config (**01_defaultSizes**). These sizes will be available to all pages and can be overwritten or complemented by the sizes defined in the page-size config.

***
##Example configuration
```
...
    'inside-full-top': {
        options : {
          loadingRatio : 0.66,        // default all 0
          percentageViewable : 50,    // default not checking
          checkContainerWidth :true,  // default false
          onlyWidthMatters :true      // default false          
        },        
        
        sizes : {
          dfp: [[994, 250], [994, 118],[300, 250]],
          appnexus: [[994, 250], [994, 118],[300, 250]]
        },   
        
        blockSizes : {
          dfp: [[994, 250]],
          appnexus: [[994, 250]]
        },
        
        forcedSizes: {
          all : [],
          mobile: [[828, 910]],
          desktop: [[960, 800]]
        }
    }
...       
```

 #### Sizes
* **dfp:** Sizes that are pushed to doubleclick.
* **appnexus:** Sizes that are pushed to appnexus

### blockSizes 
* **dfp** Sizes that are blocked for dfp (only usefull in page-size config)
* **appnexus** Sizes that are blocked for appnexus (only usefull in page-size config)

### forcedSizes
For some special cases we need to force some sizes (depended on the device) to always getting pushed to all adserver.

* **all:** Sizes the are forced on mobile and desktop
* **mobile:** Sizes the are forced on mobile 
* **desktop:** Sizes the are forced on desktop 

#### options
Adjust the size selection process
* **loadingRation:** Double between 0-1. Defines the ratio between the biggest and the smallest size to load. E.g: When 994px (width) is the widest size then all sizes bigger then 994 * 0.66 are also loaded.
* **percentageViewable:** Integer betwenn 0-100. Defines the percentage the adunits needs to be viewable when loading.
* **checkContainerWidth:**  Check if the size fits the container. Per default the viewport is checked.
* **onlyWidthMatters:** Check if the width fits the adslot. Per default width and height are checked if they fit the viewport

***





