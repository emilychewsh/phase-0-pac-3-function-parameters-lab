function introduction(name) {
    if (name === "Aki"){
        return (`Hi, my name is ${name}.`)
}   else {
    return (`Hi, my name is ${name}.`)
}
}

console.log(introduction("Samip"))

function introductionWithLanguage(name, language){
    if (name === "Aki", language === "Ember.js"){
        return "Hi, my name is Aki and I am learning to program in Ember.js."
    } else if (name === "Samip", language === "React") {
        return "Hi, my name is Samip and I am learning to program in React."
    }
}
console.log(introductionWithLanguage("Aki", "Ember.js"))


function introductionWithLanguageOptional(name, language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

