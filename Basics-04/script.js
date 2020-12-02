var course = new Object();
// course.title = "Learning Javascript";
// course.student = "Johns Jijo";
// course.author = "Morten";
// course.published = true;
// course.level = 1;
// course.views = 0;

var course = {
    title : "Learning Javascript",
    student : "Johns Jijo",
    author : "Morten",
    published : true,
    level : 1,
    views : 0,
    updateViews : function(){
        return ++course.views;
    }
}

// console.log(course);
console.log(course.views);
course.updateViews();
console.log(course.views);

function Course(title, student, author, published, level, views){
    this.title = title;
    this.student = student;
    this.author = author;
    this.published = published;
    this.level = level;
    this.views = views;
    this.updateViews = function (){
        return ++this.views;
    }
}

var newcourse = new Course("ABC","jijo","XYZ",true,1,0); //object constructors.
console.log(newcourse);

var courses = [
    new Course("ABC","jijo","XYZ",true,1,0),
    new Course("QWE","johns","POI",false,0,201)
];
console.log("Courses:");
console.log(courses);
console.log(courses[0].student);
console.log(courses[1].published);
console.log(courses[1].updateViews());
