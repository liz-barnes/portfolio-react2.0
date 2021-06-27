import zenterest from '../images/zenterest-screenshot.png';
import baguette from '../images/le-baguette-screenshot.png';
import freelancer from '../images/freelancer-screenshot.png';

const projects = [
  {
    id: '0',
    title: 'bear watcher',
    type: 'website',
    screenshot: 'https://i.ibb.co/Q9bRfd6/bearwatcher.png',
    description:
      "This application allows users to track a bear that they see out in the wild by uploading a picture!', // A good project description includes 'the what', 'the why', and 'the how'.",
    technologiesUsed: 'HTML | CSS | JavaScript | Bootstrap | Github',
    available: false,
    url: 'https://lizb-bear-watcher.netlify.app/',
    githubProject: 'https://github.com/liz-barnes/bear-watcher',
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  },
  {
    id: '1',
    title: 'pet adoption',
    type: 'website',
    screenshot: 'src/images/petadoption.png',
    description:
      'This application allows users to filter through and view the pets that are available for adoption.',
    technologiesUsed:
      'HTML | CSS | Vanilla JavaScript | Version Control with Github',
    available: false,
    url: 'https://preciouspetsadoptionagency.netlify.app/#',
    githubProject: 'https://github.com/liz-barnes/pet-adoption',
    githubUrl: '',
  },
  {
    id: '2',
    title: 'sorting hat',
    type: 'website',
    screenshot: '',
    description:
      'Have you ever always wondered which Hogwarts house you belong to? Users can type their name and sort themselves into a house!',
    technologiesUsed: 'HTML | CSS | JavaScript | Bootstrap',
    available: false,
    url: 'https://hoggywarts-sorting-hat.netlify.app/',
    githubProject: 'https://github.com/liz-barnes/sorting-hat',
    githubUrl: '',
  },
  {
    id: '3',
    title: 'color flipper',
    type: 'website',
    screenshot: '',
    description:
      'Users can change the background color and see the color code on the click of a button.',
    technologiesUsed: 'HTML | CSS | JavaScript | Version Control with Github',
    available: false,
    url: '',
    githubProject: 'https://github.com/liz-barnes/color-flipper',
    githubUrl: '',
  },
  {
    id: '4',
    title: 'tamagotchi',
    type: 'website',
    screenshot: '',
    description:
      'Recreated Tamagotchi! User can interact with their pet! Pet can eat, sleep, fight and play.',
    technologiesUsed: 'HTML | CSS | JavaScript | JQuery | SASS',
    available: false,
    url: '',
    githubProject: 'https://github.com/liz-barnes/Tamagotchi',
    githubUrl: '',
  },
  {
    id: '5',
    title: 'zenterest',
    type: 'website',
    typeOfProject: 'Personal project',
    screenshot: zenterest,
    description: 'This project is a simplified version of Pinterest. Users can create personalized boards and add pins to those boards with full CRUD functionality.',
    technologiesUsed: 'HTML | CSS | JavaScript | JQuery | REACT | SASS | Firebase',
    available: true,
    url: 'https://pinterest-5a315.web.app/#',
    githubProject: 'https://github.com/liz-barnes/zenterest.git',
    githubUrl: '',
    role: 'Project Management | Front-end Development | Design',
  },
  {
    available: true,
    description:
      'Unauthorized user can only read data. Authorized user can create, update and delete data.',
    githubProject:
      'https://github.com/liz-barnes/michelin-star-restaurant-dashboard-michelin-star-restaurant-dashboard',
    githubUrl: '',
    id: '6',
    screenshot: baguette,
    technologiesUsed: 'HTML | JavaScript | JQuery | SASS | Firebase',
    title: 'le baguette',
    type: 'website',
    typeOfProject: 'Group project',
    url: 'https://michelin-star-35c92.web.app/',
  },
  {
    available: true,
    description:
      "On login, 'Events' tab appears in the navigation. User can create, read, update and delete events and their details.",
    githubProject:
      'https://github.com/liz-barnes/renaissance-fair-dashboard-renaissance-fair-dashboard',
    githubUrl: '',
    id: '7',
    screenshot: freelancer,
    technologiesUsed: 'HTML | JavaScript | JQuery | SASS | Firebase',
    title: 'freelancer',
    type: 'website',
    typeOfProject: 'Group project',
    url: 'https://freelancer-f77ce.web.app/',
  },
];

export default projects;
