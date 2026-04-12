// Create a shallow copy of user
    // Change:
         // i. name in the copied object
          //ii. preferences.theme in the copied object
          //iii .Log both original and copied objects
          //iv. Observe what changes and what doesn’t
const user = {
id: 101,
name: "Ravi",
preferences: {
theme: "dark",
language: "en"
}
};

let shallowcopy={...user}
shallowcopy.name="radha"
shallowcopy.preferences.theme="light"
console.log(user)
console.log(shallowcopy)
