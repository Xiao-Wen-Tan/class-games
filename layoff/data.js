// "Forced Retrenchment at Atkinson", prepared by Gregory G. Dess (University of Texas at Dallas) and
// Stephanie Newport (Austin Peay State University). Profiles follow the student handout
// (Slides/Layoff game/student version.pdf). "earlier" is the earlier three-year sales growth
// average, "recent" is 2019-2021. Kenneth's and Ralph's earlier period is 2014-2016 in the source;
// everyone else's is 2016-2018. Connie's age is not given in the source.
const MANAGERS = [
  { id: "arvidson",  name: "Les Arvidson",   region: "Midwest",     age: 30,   tenure: 5,  earlier: 8,  recent: 5,
    who: "White man, single", edu: "MBA, University of Michigan",
    note: "Has performed above management's expectations, given the Midwest's general economic distress." },
  { id: "boyd",      name: "Kenneth Boyd",   region: "Northwest",   age: 42,   tenure: 21, earlier: -2, recent: 0, earlierYears: "2014-16",
    who: "White man, married, four children", edu: "High school graduate",
    note: "Iraq veteran. Joined APC right after leaving the U.S. Army. Has managed the Northwest region for 11 of his 21 years." },
  { id: "cortez",    name: "Connie Cortez",  region: "Southeast",   age: null, tenure: 10, earlier: -1, recent: 1,
    who: "Hispanic woman, married, one child", edu: "BBA with honors, University of Florida",
    note: "Her husband, a textile executive, is currently unemployed because of problems in that industry." },
  { id: "donaldson", name: "Fred Donaldson", region: "Atlantic",    age: 37,   tenure: 2,  earlier: 2,  recent: 1,
    who: "Black man, married", edu: "BS, VMI",
    note: "He and his wife Colette, who has a professional career, have adopted two \"special needs\" children." },
  { id: "elliott",   name: "Sean Elliott",   region: "Southwest",   age: 53,   tenure: 5,  earlier: 5,  recent: 7,
    who: "White man, widower", edu: "Associate of Arts, community college",
    note: "Came to APC five years ago after his wife died. Recently completed a company-sponsored substance abuse program." },
  { id: "franklin",  name: "Alice Franklin", region: "New England", age: 48,   tenure: 25, earlier: -4, recent: -2,
    who: "Black woman, divorced, two grown children", edu: "High school diploma",
    note: "Loyal 25-year employee who worked her way up from file clerk. Sole support of her elderly parents." },
  { id: "gonzales",  name: "Ralph Gonzales", region: "Pacific (incl. AK and HI)", age: 28, tenure: 3, earlier: -5, recent: -1, earlierYears: "2014-16",
    who: "Hispanic man, married, two children", edu: "MBA, San Diego State University",
    note: "Hired after a two-summer internship with APC. Active in the Boy Scouts of America and the Jaycees." },
  { id: "hobbs",     name: "Mary Hobbs",     region: "Mountain",    age: 45,   tenure: 2,  earlier: -3, recent: 3,
    who: "White woman, separated after 24 years of marriage, two grown children", edu: "BS, University of Minnesota; MBA at night",
    note: "" },
];

const CRITERIA = [
  ["performance", "Sales performance"], ["tenure", "Tenure and loyalty"], ["family", "Family and financial need"],
  ["legal", "Diversity and legal risk"], ["potential", "Education and potential"], ["other", "Something else"],
];

const DEBRIEF = [
  "Is this decision situation realistic?",
  "Did you rank for Atkinson's goals (profit at 10% of sales, 3% growth) or for your own sense of fairness?",
  "Sales growth was the only performance number. What else would you want to know?",
  "Who are the stakeholders? Think of customers, the managers who stay, and the EEOC.",
  "What happens in the long run, not just this quarter?",
  "Was there a novel solution, such as redrawing regions or pay cuts instead of layoffs?",
];
