import { Worksheets } from "./types";

export const links = [
  {
    name: "Calculate Grade",
    href: "/calculator",
  },
  {
    name: "Assignments",
    href: "/assignments",
  },
] as const;

export const programmingAssignments = [
  {
    id: "1",
    name: "Array Implementation of Stacks and Queues",
  },
  {
    id: "2",
    name: "Round Robin Scheduler",
  },
  {
    id: "3",
    name: "Building Heaps",
  },
  {
    id: "4",
    name: "Hashing",
  },
  {
    id: "5",
    name: "Queue with 2 Stacks",
  },
  {
    id: "6",
    name: "Sorting Algorithms",
  },
] as const;

export const worksheets: Worksheets = {
  Spring2020: [
    {
      id: "SP20-1",
      name: "Homework 1",
      questions: [],
    },
    {
      id: "SP20-2",
      name: "Homework 2",
      questions: [],
      solution: "link-to-solution",
    },
    {
      id: "SP20-3",
      name: "Homework 3 & 4",
      questions: [],
      solution: "link-to-solution",
    },
    {
      id: "SP20-4",
      name: "Homework 5 & 6",
      questions: [],
      solution: "link-to-solution",
    },
    {
      id: "SP20-5",
      name: "Extra Credit 2",
      questions: [],
      solution: "link-to-solution",
    },
  ],
  Fall2019: [
    {
      id: "FA19-1",
      name: "Extra Credit 2",
      questions: [],
    },
    {
      id: "FA19-2",
      name: "Extra Credit 3",
      questions: [],
      solution: "link-to-solution",
    },
    {
      id: "FA19-3",
      name: "Extra Credit 4",
      questions: [],
      solution: "link-to-solution",
    },
    {
      id: "FA19-4",
      name: "Extra Credit 5",
      questions: [],
    },
    {
      id: "FA19-5",
      name: "Extra Credit 6",
      questions: [],
      solution: "(Solved)",
    },
  ],
};

export const instructorInfo = {
  name: "Manju Muralidharan Priya",
  Email: "mmuralidharanpriya@sdsu.edu",
  "Virtual Office": "Meeting ID 243-757-7255 (on Zoom)",
  Office: "GMCS 546 , T, TH 9:30 AM - 11:30 AM",
};

export const topics = [
  {
    name: "Java Basics & Generics",
    href: "/topics/java-basics",
  },
  {
    name: "Analysis of Algorithms",
    href: "/topics/analysis-of-algorithms",
  },
  {
    name: "Stacks, Queues, & Linked Lists",
    href: "/topics/stacks-queues-and-linked-lists",
  },
  {
    name: "Sorting Algorithms",
    href: "/topics/sorting-algorithms",
  },
  {
    name: "Priority Queues & Heaps",
    href: "/topics/priority-queues-and-heaps",
  },
  {
    name: "Trees",
    href: "/topics/trees",
  },
  {
    name: "Hashing",
    href: "/topics/hashing",
  },
  {
    name: "Graphs & Graph Algorithms",
    href: "/topics/graphs-graph-algorithms",
  },
] as const;
