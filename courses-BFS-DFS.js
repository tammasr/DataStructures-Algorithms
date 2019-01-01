
let courses = [

    {
        "name": "Algebra 2",
        "prerequisites": ["Algebra 1", "Geometry"]
    },
    {
        "name": "Algebra 1",
        "prerequisites": []
    },
    {
        "name": "Geometry",
        "prerequisites": []
    },
    {
        "name": "Pre Calculus",
        "prerequisites": ["Algebra 2"]
    }
];

function addRank (name, reqs) {
    if (reqs.length === 0) {
        rank[name] = 1;
    } else {
        rank[name] = n--;
    }
}
var rank = {};
var n = 3;

function printOrder () {
    for (let i=0; i < courses.length; i++) {
        var course = courses[i];
        n = 3;
        addRank(course.name, course.prerequisites);
        var reqs = course.prerequisites;
        for(let j = 0; j < reqs.length;j++) {
            var course1 = reqs[j];
            var reqs2 = courses.map((item) => {
                if (item.name === course1) {
                    return item.prerequisites;
                }
            })
            addRank(course1, reqs2);
        }

    }

    console.log(rank);
}

printOrder();

