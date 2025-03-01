const universities = [
  {
    name: "Harvard University",
    domain: "harvard.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Stanford University",
    domain: "stanford.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "28-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Massachusetts Institute of Technology",
    domain: "mit.edu",
    notificationEarly: "17-12-24",
    notificationRegular: "14-03-25",
    time: "18:28",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "California Institute of Technology",
    domain: "caltech.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "15-03-25",
    time: "14:22",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Columbia University",
    domain: "columbia.edu",
    notificationEarly: "18-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Princeton University",
    domain: "princeton.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Yale University",
    domain: "yale.edu",
    notificationEarly: "17-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Cornell University",
    domain: "cornell.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "University of Pennsylvania",
    domain: "upenn.edu",
    notificationEarly: "19-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Johns Hopkins University",
    domain: "jhu.edu",
    notificationEarly: "14-02-25",
    showEarly: true,
    notificationRegular: "21-03-25",
    time: "15:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "New York University",
    domain: "nyu.edu",
    showEarly: true,
    notificationEarly: "13-02-25",
    notificationRegular: "01-04-25",
    time: "16:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Northwestern University",
    domain: "northwestern.edu",
    notificationEarly: "17-12-24",
    notificationRegular: "01-04-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Duke University",
    domain: "duke.edu",
    notificationEarly: "16-12-24",
    notificationRegular: "27-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Dartmouth College",
    domain: "dartmouth.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Brown University",
    domain: "brown.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "27-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Pomona College",
    domain: "pomona.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "28-03-25",
    time: "20:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Amherst College",
    domain: "amherst.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "20-03-25",
    time: "18:21",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of North Carolina at Chapel Hill",
    domain: "unc.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "21-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Williams College",
    domain: "williams.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "21-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, Berkeley",
    domain: "berkeley.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "27-03-25",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "University of California, Los Angeles",
    domain: "ucla.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "21-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, San Diego",
    domain: "ucsd.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "21-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, Irvine",
    domain: "uci.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "28-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, Santa Barbara",
    domain: "ucsb.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "28-03-25",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, Davis",
    domain: "ucdavis.edu",
    notificationEarly: "12-12-24", // Mid-December 2024
    notificationRegular: "28-03-25", // Late March 2025
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of California, Santa Cruz",
    domain: "ucsc.edu",
    notificationEarly: "12-12-24", // Mid-December 2024
    notificationRegular: "28-03-25", // Late March 2025
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Middlebury College",
    domain: "middlebury.edu",
    notificationEarly: "12-12-24",
    notificationRegular: "15-03-25",
    time: "08:00",
    fileExists: true,
    notConfirmedDate: false,
  },
  {
    name: "Bowdoin College",
    domain: "bowdoin.edu",
    notificationEarly: "12-12-24", // Mid-December 2024
    notificationRegular: "21-03-25", // Late March 2025
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Washington University in St. Louis",
    domain: "wustl.edu",
    notificationEarly: "13-02-25",
    showEarly: true,
    notificationRegular: "28-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Vanderbilt University",
    domain: "vanderbilt.edu",
    notificationEarly: "17-12-24",
    notificationRegular: "27-03-25",
    time: "18:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of Chicago",
    domain: "uchicago.edu",
    notificationEarly: "14-02-25",
    showEarly: true,
    notificationRegular: "28-03-25",
    time: "19:00",
    notConfirmedDate: true,
    fileExists: true,
  },
  {
    name: "Rice University",
    domain: "rice.edu",
    notificationEarly: "14-12-24",
    notificationRegular: "28-03-25",
    time: "10:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Carnegie Mellon University",
    domain: "cmu.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "23-03-25",
    time: "16:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of Notre Dame",
    domain: "nd.edu",
    notificationEarly: "17-12-24",
    notificationRegular: "21-03-25",
    time: "18:42",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Emory University",
    domain: "emory.edu",
    notificationEarly: "11-12-24",
    notificationRegular: "26-03-25",
    time: "18:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Georgetown University",
    domain: "georgetown.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "01-04-25",
    time: "17:50",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of Southern California",
    domain: "usc.edu",
    notificationEarly: "17-01-25",
    notificationRegular: "28-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of Michigan",
    domain: "umich.edu",
    notificationEarly: "24-01-25",
    notificationRegular: "28-03-25",
    time: "15:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Tufts University",
    domain: "tufts.edu",
    notificationEarly: "13-12-24",
    notificationRegular: "28-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Villanova University",
    domain: "villanova.edu",
    notificationEarly: "25-11-24",
    notificationRegular: "17-01-25",
    time: "16:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Boston College",
    domain: "bc.edu",
    notificationEarly: "03-12-24",
    notificationRegular: "28-03-25",
    time: "18:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Case Western Reserve University",
    domain: "case.edu",
    notificationEarly: "15-12-24",
    notificationRegular: "22-03-25",
    time: "09:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "Barnard College",
    domain: "barnard.edu",
    notificationEarly: "15-12-24",
    notificationRegular: "26-03-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
  {
    name: "University of Texas at Austin",
    domain: "utexas.edu",
    notificationRegular: "07-02-25",
    time: "19:00",
    fileExists: true,
    notConfirmedDate: true,
  },
] as University[];
type University = {
  name: string;
  domain: string;
  notificationEarly: string;
  notificationRegular: string;
  showEarly?: boolean;
  fileExists: boolean;
  notConfirmedDate?: boolean;
  time?: string;
};
export default universities;
export type { University };
