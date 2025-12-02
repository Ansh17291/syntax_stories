// src/utils/navBarmap.ts
const navBarmap = [
  { title: "HOME", route: "/" },
  { title: "ABOUT", route: "/about" },
  { title: "CONTACT US", route: "/contact" },
  { title: "PROJECTS", route: "/projects" },
  { title: "ROADMAPS", route: "/roadmaps" },
];

export default navBarmap;

// Optional type
export type NavItem = {
  title: string;
  route: string;
};
