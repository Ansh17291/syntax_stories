// src/utils/navBarmap.ts
const navBarmap = [
  { title: "Home", route: "/" },
  { title: "About", route: "/about" },
  { title: "Contact Me", route: "/contact" },
  { title: "Projects", route: "/projects" },
  { title: "RoadMaps", route: "/roadmaps" },
];

export default navBarmap;

// Optional type
export type NavItem = {
  title: string;
  route: string;
};
