const skills = [
  {
    title: 'AutoCAD',
    competency: 4,
    category: ['CAD', 'Tools'],
  },
  {
    title: 'Revit',
    competency: 2.5,
    category: ['BIM', 'Tools'],
  },
  {
    title: 'Microsoft Office',
    competency: 4,
    category: ['Application Suite', 'Tools'],
  },
  {
    title: 'Canva',
    competency: 4,
    category: ['Graphic Design', 'Tools'],
  },
  {
    title: 'WordPress',
    competency: 3.5,
    category: ['CMS'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Tools', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 2.5,
    category: ['Web Development', 'Javascript', 'Languages'],
  },
  {
    title: 'React',
    competency: 2.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Troubleshooting',
    competency: 3.5,
    category: ['Software', 'Hardware', 'Network'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
