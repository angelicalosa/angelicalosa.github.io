/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ShareBIM Asia Engineering Consultancy',
    position: 'BIM Modeler',
    url: 'https://www.jobstreet.com.ph/companies/sharebim-asia-engineering-consultancy-168550826318019',
    startDate: '2024-03-05',
    endDate: '2024-05-05',
    summary: ` 
     `,
    highlights: [
      'Collaborated with project lead to ensure successful completion of modeling tasks.',
      'Design drawing preparation and tracks response to update the model, generation of shop drawings from the approved construction drawings.',
    ],
  },
  {
    name: 'Fire Professionals Inc.',
    position: 'AutoCAD Operator',
    url: 'https://fireprofessionals.com.ph',
    startDate: '2019-09-03',
    endDate: '2023-09-15',
    summary: ` 
     `,
    highlights: [
      'Demonstrated ability to create and modify drawings to meet engineering requirements.',
      'Proven success in accurately producing CAD drawings and plans from verbal and written instructions.',
      'Highly experienced in identifying and computing materials, labor and overhead and preliminaries in accordance with bid plan, technical specifications and bid documents.',
      'Exhibited skills to create business presentations and advertising tools for products and services.',
      'Well established vision to build, design, and maintain a website.',
      'In-depth knowledge of Identifying hardware and software solutions, and diagnosing and repairing faults.',
    ],
  },
];

export default work;
