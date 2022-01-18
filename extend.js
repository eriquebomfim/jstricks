
/**
* Extend provides a way to merge two objects
* or update property value from original object
* @target <Object> - original object
* @ext    <Object> - object to merge with
*/

extend = function(target, ext){
    return Object.keys(target).reduce((rdx,curr)=>{ 
        if (ext[curr]){
            if (ext[curr].constructor.name == "Object"){ 
                rdx[curr] = extend(target[curr], ext[curr]); 
            } else {
                rdx[curr] = ext[curr];                                
            }
        } else {
            rdx[curr] = target[curr];
        }
        return rdx;
    },ext);  
}

/**
 * The original Object
 */
var a = {
    "car":{
        "wheels":4,
        "brand" :"GM",
        "tint"  :{
            "type":"metalic"
        }
    }
}

z = extend(a,{
    "car":{
        "tint":{
            "type" : "solid",
            "color": "blue"
        }
    }
});

console.dir(z);
