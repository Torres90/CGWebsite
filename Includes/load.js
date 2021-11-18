// $(document).ready(function () {

//     $('#header').load("./Includes/include_header.html");
//     $('#footer').load("./Includes/include_footer.html");
//     $('#navbar').load("./Includes/include_navbar.html");

//     // Posts
//     $('#post4').load("./Posts/2021-11-17-Learning-Algebra.html");
//     $('#post3').load("./Posts/2021-11-16-Starting-Book-of-Shaders.html");
//     $('#post2').load("./Posts/2021-11-12-Lecture-1.html");
//     $('#post1').load("./Posts/2021-11-12-Start.html");

//     $('#loadOtherScripts').load("/loadOtherScripts.html");
//     $('#loadOtherScriptsCopy').load("/loadOtherScriptsCopy.html");
// });

let deferreds = [];
function load(selector, path) {
    const def = new $.Deferred()
    deferreds.push(def);
    $(selector).load(path, () => def.resolve());
}

$(document).ready(function () {
    load('#header', "./Includes/include_header.html");
    load('#footer', "./Includes/include_footer.html");
    load('#navbar', "./Includes/include_navbar.html");

    // Posts
    load('#post5', "./Posts/2021-11-18-BoS-Fence.html");
    load('#post4', "./Posts/2021-11-17-Learning-Algebra.html");
    load('#post3', "./Posts/2021-11-16-Starting-Book-of-Shaders.html");
    load('#post2', "./Posts/2021-11-12-Lecture-1.html");
    load('#post1', "./Posts/2021-11-12-Start.html");

    $.when.apply(null, deferreds).done(function () {
        var list = document.getElementsByClassName('glslCanvas');

        if (list.length > 0) {
            window.glslCanvases = [];
            for (var i = 0; i < list.length; i++) {
                var sandbox = new GlslCanvas(list[i]);
                if (sandbox.isValid) {
                    window.glslCanvases.push(sandbox);
                }
            }
        }
    });
    load('#otherScripts', "./loadOtherScripts.html");
});