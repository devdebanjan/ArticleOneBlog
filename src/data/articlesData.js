// src/data/articlesData.js
import fifaTrophy from '../blog/final.png';
import heroImage from '../assets/squad.png'; // <--- IMPORT YOUR T20 IMAGE HERE

import fifa from '../Fifa Recap/fifa.png'

import Neymar from '../ComeBack/Neymar.jpg'

import banner from '../blog/groupof32/images/banner.jpeg'

export const articlesData = [
  {
    id: 1,
    tag: "Round of 32",
    title: "The Race  Round of 32",
    excerpt: "Neymar 981 days journey || Round of 32",
    image: banner, // <--- CHANGE THIS FROM null TO heroImage
    date: "June 28, 2026",
    readTime: "10 min read",
    link: "/Fifa-knockout", 
    isFeatured: true,      
    isUpcoming: false      
  },
   {
    id: 2,
    tag: "Round of 32",
    title: "The Race  Round of 32",
    excerpt: "Neymar 981 days journey || Round of 32",
    image: Neymar, // <--- CHANGE THIS FROM null TO heroImage
    date: "June 28, 2026",
    readTime: "10 min read",
    link: "/Fifa-roundof32", 
    isFeatured: false,      
    isUpcoming: false      
  },
  {
    id: 3,
    tag: "Fifa 2026 First week Recap",
    title: "The roolercoaseter week....",
    excerpt: "The best fifa games weekly recap, Lets deep dive intoit.....",
    image: fifa, // <--- CHANGE THIS FROM null TO heroImage
    date: "June 21, 2026",
    readTime: "10 min read",
    link: "/Fifa-recap-week", 
    isFeatured: false,      
    isUpcoming: false      
  },
  {
    id: 4,
    tag: "Women's T20 World Cup 2026",
    title: "Athletic Evolution, Statistical Extremes...",
    excerpt: "From the ultimate India vs. Pakistan opener...",
    image: heroImage, // <--- CHANGE THIS FROM null TO heroImage
    date: "June 14, 2026",
    readTime: "10 min read",
    link: "/t20-world-cup", 
    isFeatured: false,      
    isUpcoming: false      
  },
  // ... rest of your data,
  {
    id: 5,
    tag: "FIFA World Cup 2026",
    title: "My Memories: A Journey That Never Ends",
    excerpt: "The global tapestry of the 2026 FIFA World Cup: Cultural phenomenon, tactical evolution, and the 48-team era.",
    image: fifaTrophy,
    date: "June 12, 2026",
    readTime: "8 min read",
    link: "/fifa-memories",
    isFeatured: false,     // CHANGED TO FALSE (This moves it to the smaller grid)
    isUpcoming: false
  }
];