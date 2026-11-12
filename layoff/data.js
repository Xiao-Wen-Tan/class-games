// "Forced Retrenchment at Atkinson", prepared by Gregory G. Dess (University of Texas at Dallas) and
// Stephanie Newport (Austin Peay State University). All text follows the student handout
// (Slides/Layoff game/student version.pdf). OVERVIEW and each manager's "profile" are the handout's
// own words, with four obvious typos fixed: "201-2021" to "2019-2021" (Les Arvidson), "thin" to
// "than", "for to other" to "to other", and "economic condition" to "economic conditions".
// "SCG" is left as printed. The short fields ("who", "edu", "note", growth numbers) are for the
// ranking cards. "earlier" is the earlier three-year sales growth average, "recent" is 2019-2021.
// Kenneth's and Ralph's earlier period is 2014-2016 in the source; everyone else's is 2016-2018.
// Connie's age is not given in the source.
const OVERVIEW = [
  "Atkinson Paper Company (APC) was founded nearly 50 years ago. It was originally a family-owned company until 2010 when it was acquired by Continental Corporation (CC)--a large conglomerate dealing with a wide range of products including home furnishings, packaging materials, specialty paint products, and automobile accessories. APC specializes in a wide variety of high-quality office supplies including computer paper and letterhead stationery.",
  "CC acquired APC from the Atkinson family during adverse economic conditions. APC's sales had decreased from $150 million to $90 million during the five years (2009-2014) prior to the acquisition. CC invested approximately $5 million per year in order to turn around APC during the three years (2015-2018) immediately following the acquisition.",
  "Once APC's financial viability was somewhat assured, CC began to channel APC's cash flow into other subsidiaries with greater growth potential. Thus, CC began to view APC as a \"cash cow\" (in the SCG corporate portfolio vernacular.) Not surprisingly, Atkinson's profitability goals for the coming two years (annual 10 percent of sales) is much more challenging than its sales growth goal (annual 3 percent increase). The parent company has come to depend on Atkinson's profitability to generate cash to other subsidiaries.",
  "You are to assume the role of Lynn Jackson, National Sales Manager (refer to the attached organization chart and associated information). Last month, Pat Ingram, V.P., Sales and Marketing (your immediate superior) informed you that to cut expenses you must reorganize your sales organization into a smaller number of regional offices. As a first step, you are directed to develop a priority list in which you will rank order all regional sales managers in terms of a \"lay off schedule.\" Please rank the individuals according to the order in which they should be laid off--that is, the person to be laid off first is ranked one, etc.",
  "Pat Ingram has assured you that you will have input into many aspects of the \"retrenchment.\" What \"personal\" and \"professional\" strategies should you start thinking of?",
];

// Organization chart (handout page 2). The eight regions report to Lynn Jackson, in the handout's order.
const ORG = {
  top: "President",
  units: [
    ["VP", "Finance & Accounting"], ["VP", "Manufacturing"], ["VP", "Sales & Marketing", "Pat Ingram"],
    ["VP", "Director Human Resources"], ["Director", "Engineering & Development"],
  ],
  underSales: [["Director", "of Marketing"], ["National Sales Manager", "Lynn Jackson (you)"]],
  regions: ["franklin", "donaldson", "cortez", "arvidson", "elliott", "hobbs", "gonzales", "boyd"],
};

const MANAGERS = [
  { id: "arvidson",  name: "Les Arvidson",   region: "Midwest",     age: 30,   tenure: 5,  earlier: 8,  recent: 5,
    who: "White man, single", edu: "MBA, University of Michigan",
    note: "Has performed above management's expectations, given the Midwest's general economic distress.",
    profile: "Les Arvidson is a 30-year-old white male who has been with APC for five years. He manages the Midwest region where the three-year sales growth average of 2016-2018 was 8%. The three-year average for 2019-2021 was 5%, but Les has performed above management's expectations, given the Midwest's general economic distress. Les is single and has an MBA from the University of Michigan." },
  { id: "boyd",      name: "Kenneth Boyd",   region: "Northwest",   age: 42,   tenure: 21, earlier: -2, recent: 0, earlierYears: "2014-16",
    who: "White man, married, four children", edu: "High school graduate",
    note: "Iraq veteran. Joined APC right after leaving the U.S. Army. Has managed the Northwest region for 11 of his 21 years.",
    profile: "Kenneth Boyd is a white, 42-year-old Iraq veteran who is married and has four children. Ken began working for APC immediately after his discharge from the U. S. Army. He is a high school graduate and has managed the Northwest region for 11 of his 21 years with APC. Regional sales growth average for 2019-2021 was flat (0% growth) compared to a sales decline (-2% growth) for the 2014-2016 period." },
  { id: "cortez",    name: "Connie Cortez",  region: "Southeast",   age: null, tenure: 10, earlier: -1, recent: 1,
    who: "Hispanic woman, married, one child", edu: "BBA with honors, University of Florida",
    note: "Her husband, a textile executive, is currently unemployed because of problems in that industry.",
    profile: "Connie Cortez was recruited from the University of Florida where she earned her BBA, with honors, 10 years ago. Connie manages the Southeast region where the sales growth for 2019-2021 was +1%. For 2016-2018 the figure was -1%. Connie, a Hispanic, has one child and is married to a textile executive who is currently unemployed because of economic problems in that industry." },
  { id: "donaldson", name: "Fred Donaldson", region: "Atlantic",    age: 37,   tenure: 2,  earlier: 2,  recent: 1,
    who: "Black man, married", edu: "BS, VMI",
    note: "He and his wife Colette, who has a professional career, have adopted two \"special needs\" children.",
    profile: "Fred Donaldson, 37, manages the Atlantic sales region. Average sales growth in 2016-2018 was +2% and for 2019-2021 was +1%. Fred is black and holds a Bachelor of Science degree from VMI. He and his wife, Colette, who has a professional career, have adopted two \"special needs\" children. Fred has been employed with APC for two years." },
  { id: "elliott",   name: "Sean Elliott",   region: "Southwest",   age: 53,   tenure: 5,  earlier: 5,  recent: 7,
    who: "White man, widower", edu: "Associate of Arts, community college",
    note: "Came to APC five years ago after his wife died. Recently completed a company-sponsored substance abuse program.",
    profile: "Sean Elliott is the manager of the Southwest region where the three-year sales growth average (2016-2018) was +5% and for the 2019-2021 period was +7%. Sean is white, 53 years old, and holds an Associate of Arts degree from a community college. He came to work for APC 5 years ago after his wife died. Sean recently completed a company sponsored substance abuse program." },
  { id: "franklin",  name: "Alice Franklin", region: "New England", age: 48,   tenure: 25, earlier: -4, recent: -2,
    who: "Black woman, divorced, two grown children", edu: "High school diploma",
    note: "Loyal 25-year employee who worked her way up from file clerk. Sole support of her elderly parents.",
    profile: "Alice Franklin is black, 48, and a loyal, 25-year employee of APC. Although Alice never went to college, she has a high school diploma and has worked her way up in the organization from a file clerk's position. Alice manages the New England sales region where the three-year sales growth average (2019-2021) was -2%. Growth average over the previous three-year period (2016-2018) was -4%. Alice is divorced, has two grown children, and is the sole support of her elderly parents." },
  { id: "gonzales",  name: "Ralph Gonzales", region: "Pacific (incl. AK and HI)", age: 28, tenure: 3, earlier: -5, recent: -1, earlierYears: "2014-16",
    who: "Hispanic man, married, two children", edu: "MBA, San Diego State University",
    note: "Hired after a two-summer internship with APC. Active in the Boy Scouts of America and the Jaycees.",
    profile: "Ralph Gonzales, 28, manages the Pacific sales region and was hired 3 years ago after successfully completing a two-summer internship with APC. The internship was served while he completed his MBA at San Diego State University. Ralph is Hispanic, is married, and has two children; he is active in the Boy Scouts of America and the Jaycees. The Pacific region sales growth average for the last three years (2019-2021) was -1%, an improvement over the average -5% growth for the 2014 to 2016 period." },
  { id: "hobbs",     name: "Mary Hobbs",     region: "Mountain",    age: 45,   tenure: 2,  earlier: -3, recent: 3,
    who: "White woman, separated after 24 years of marriage, two grown children", edu: "BS, University of Minnesota; MBA at night",
    note: "",
    profile: "Mary Hobbs is white, 45 years old, and joined APC two years ago. She holds a Bachelor of Science degree from the University of Minnesota and is currently attending night classes for her MBA. Mary manages the Mountain region and for the three years 2019-2021 recorded an average sales growth of 3%. The average in Mary's region for 2016-2018 was -3%. She is currently separated from her husband of 24 years and has two grown children." },
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
