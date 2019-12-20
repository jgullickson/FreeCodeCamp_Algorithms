// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
let slug = title
            .split(/\s+/)
            .filter((item)=> {
                let regex = new RegExp(/^\w+/);
                return regex.test(item);
            })
            .map((word)=>word.toLowerCase())
            .join('-');
console.log(slug);
return slug
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
