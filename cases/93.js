
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]
/*
divide and conquer

2.right => 2.5.right => 2.5.5.right x
          2.55.right => 2.55.2.right
          2.552.right x
25.right => 25.5.right => 25.5.2.right
                        => 25.5.25.right
                        => 25.5.255.right
            25.52.right => 25.52.5.right
                        => 25.52.55.right
                        => 25.52.551.right x
            25.525.right x 
255.right => 255.2.right => 255.2.5.right
                         => 255.2.55.right
                         => 255.2.551.right x
             255.25.right => 255.25.5.right
                          => 255.25.51.right
                          => 255.25.511.right x
             255.255.right => 255.255.1.right => 255.255.1.1.right x
                                              => 255.255.1.11.right x
                                              => 255.255.1.113.right x
                          => 255.255.11.right => 255.255.11.1.right x
                                              => 255.255.11.13.right x
                                              => 255.255.11.135 
                          => 255.255.111.right => 255.255.111.3.right x
                                               => 255.255.111.35

helper(left, right);


*/

var restore = function(s) {
  var ret = [];
  
  var helper = function(arr, s) {


  }

}
