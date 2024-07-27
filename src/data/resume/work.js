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
    name: 'Fireprofessionals (Firepro) Inc.  ',
    position: 'Junior Sales Executive',
    url: 'https://fireprofessionals.com.ph',
    startDate: '2023-02-15',
    endDate: '2024-05-15',
    summary: ` 
     `,
    highlights: [
      'Prospected and generated leads within assigned territory, resulting in a 20% increase in client base.',
      'Presented and demonstrated fire protection products and services to potential customers, achieving a 15% conversion rate.',
      'Collaborated with technical teams to ensure accurate understanding and representation of product features and benefits.',
      'Negotiated contracts and terms of sales agreements, consistently meeting or exceeding monthly sales targets.',
    ],
  },
  {
    name: 'COMELEC',
    position: 'DESO Technician Support',
    url: ' ',
    startDate: '2022-04-01',
    endDate: '2022-04-30',
    summary: ` 
     `,
    highlights: [
      'Provided expert technical support and troubleshooting for DESO systems, resolving issues promptly and ensuring minimal downtime.',
      'Managed, installed, configured, and tested new DESO equipment at customer sites, ensuring seamless integration and functionality.',
    ],
  },
];

export default work;
