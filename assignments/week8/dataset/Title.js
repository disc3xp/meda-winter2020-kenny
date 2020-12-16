class Title {
    constructor(year, jobCode, title, unionCode, setID, min, max) {
        this.year = year;
        this.setID = setID;
        this.jobCode = jobCode;
        this.title = title;
        this.unionCode = unionCode;
        this.biWeeklyMin = min;
        this.biWeeklyMax = max;
        this.biWeeklyAvg = (min + max) / 2;
        this.steps = [];
    }
}

//file name has to match the class name, therefore, our file name here is Title.js
module.exports = Title;