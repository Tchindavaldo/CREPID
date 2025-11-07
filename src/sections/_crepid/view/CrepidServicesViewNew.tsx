// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import _mock from 'src/_mock';
import { _secteurs } from 'src/_mock/_secteurs';
//
import BlogSidebar from 'src/sections/blog/sidebar';
import { PostSearchMobile } from 'src/sections/blog/components';
//
import CrepidServicesFeaturedPosts from '../services/CrepidServicesFeaturedPosts';
import CrepidServicesPosts from '../services/CrepidServicesPosts';

// ----------------------------------------------------------------------

const _tags = [
  { label: 'Formation', path: '#' },
  { label: 'Agriculture', path: '#' },
  { label: 'Élevage', path: '#' },
  { label: 'Développement', path: '#' },
  { label: 'Aquaculture', path: '#' },
  { label: 'Environnement', path: '#' },
];
const _categories = [
  { label: 'Formations', path: '#' },
  { label: 'Accompagnement', path: '#' },
  { label: 'Recherche', path: '#' },
  { label: 'Développement', path: '#' },
];

// ----------------------------------------------------------------------

export default function CrepidServicesViewNew() {
  return (
    <>
      <PostSearchMobile />

      <CrepidServicesFeaturedPosts posts={_secteurs.slice(-5)} />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <CrepidServicesPosts posts={_secteurs} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _secteurs.slice(-4) }}
              advertisement={{
                title: 'Contactez-nous',
                description: 'Pour plus d\'informations sur nos services et formations',
                imageUrl: _mock.image.travel(9),
                path: '/contact',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

// OLD DATA - TO DELETE
/*
  {
    id: '1',
    title: 'Accompagnement au montage et à la mise en œuvre des projets de Développement',
    description: 'Nos populations cibles sont généralement moins outillées pour traduire en projet les idées de projets. Le CREPID s\'engage à accompagner de façon participative les communautés, organisations, entreprises et individus dans l\'identification des problèmes et la mise sur pied des stratégies appropriées de solution.',
    coverImg: '/assets/images/travel/travel_post_01.jpg',
    createdAt: new Date(),
    duration: '5 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
    actions: [
      'Diagnostics participatifs et élaboration des stratégies de développement',
      'La recherche-action',
      'Élaboration des projets de développement',
      'Réalisation des études qui permettent aux commanditaires d\'avoir des données et des scénarios possibles pour une prise de décision',
    ],
    heroImg: '/assets/images/travel/travel_post_01.jpg',
    category: 'Accompagnement',
    favorited: false,
  },
  {
    id: '2',
    title: 'Formations pratiques dans divers domaines d\'activité agricoles, d\'élevage et d\'artisanat',
    description: 'Le CREPID accueille les apprenants et les affecte immédiatement auprès des exploitations de leur choix pour une formation essentiellement pratique.',
    coverImg: '/assets/images/travel/travel_post_02.jpg',
    createdAt: new Date(),
    duration: '8 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '3',
    title: 'Accompagnement à la formulation, à la mise en œuvre et au suivi et évaluation des projets',
    description: 'À partir d\'une planification stratégique et opérationnelle, le CREPID suit des projets, des populations et institutions bénéficiaires.',
    coverImg: '/assets/images/travel/travel_post_03.jpg',
    createdAt: new Date(),
    duration: '6 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '4',
    title: 'Études et recherches pour la promotion des technologies innovantes',
    description: 'Le CREPID possède des talents et compétences qui conçoivent de nouveaux modèles technologiques pour les populations cibles.',
    coverImg: '/assets/images/travel/travel_post_04.jpg',
    createdAt: new Date(),
    duration: '7 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '5',
    title: 'Animation des réflexions et des formations',
    description: 'Le CREPID facilite les moments de réflexion et organise des formations au profit des organisations, entreprises et individus.',
    coverImg: '/assets/images/travel/travel_post_05.jpg',
    createdAt: new Date(),
    duration: '5 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '6',
    title: 'Développement organisationnel',
    description: 'Comment permettre à votre organisation d\'utiliser rationnellement ses ressources internes et externes pour faciliter le progrès ?',
    coverImg: '/assets/images/travel/travel_post_06.jpg',
    createdAt: new Date(),
    duration: '6 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '7',
    title: 'Diagnostic participatif et renforcement des capacités des organisations paysannes',
    description: 'Diagnostic participatif au développement du groupe ADIBE, localité de Banock, groupement Bansoa dans la région de l\'Ouest Cameroun.',
    coverImg: '/assets/images/travel/travel_post_07.jpg',
    createdAt: new Date(),
    duration: '4 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '8',
    title: 'Accompagnement au processus d\'organisation et d\'autopromotion des populations urbaines',
    description: 'Le CREPID apporte un appui à l\'autopromotion des populations démunies des milieux urbains par l\'organisation en réseau d\'acteurs.',
    coverImg: '/assets/images/travel/travel_post_08.jpg',
    createdAt: new Date(),
    duration: '7 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '9',
    title: 'Accompagnement à l\'organisation et professionnalisation des producteurs',
    description: 'Développement de stratégies qui suscitent l\'esprit de groupe et favorisent la professionnalisation dans les filières de production.',
    coverImg: '/assets/images/travel/travel_post_01.jpg',
    createdAt: new Date(),
    duration: '6 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '10',
    title: 'Conception et réalisation d\'outils de communication',
    description: 'Le CREPID réalise et propose des messages, supports et outils divers pour transmettre des idées et faire connaître des produits.',
    coverImg: '/assets/images/travel/travel_post_02.jpg',
    createdAt: new Date(),
    duration: '5 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '11',
    title: 'Épargne, microcrédits et financement des microprojets ruraux et urbains',
    description: 'Développement de stratégies et de mécanismes de mobilisation des fonds pour le financement des activités des populations.',
    coverImg: '/assets/images/travel/travel_post_03.jpg',
    createdAt: new Date(),
    duration: '6 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '12',
    title: 'Genre et Développement',
    description: 'Le CREPID anime des réflexions sur l\'approche genre et développe des stratégies pour impliquer davantage la femme dans la vie économique et sociale.',
    coverImg: '/assets/images/travel/travel_post_04.jpg',
    createdAt: new Date(),
    duration: '4 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '13',
    title: 'Développement de la pêche et de l\'aquaculture',
    description: 'Amener les populations rurales à comprendre l\'importance de l\'aquaculture et de la pêche pour améliorer leur bien-être.',
    coverImg: '/assets/images/travel/travel_post_05.jpg',
    createdAt: new Date(),
    duration: '7 min',
    author: { name: 'CREPID', picture: '/assets/images/avatar/avatar_1.jpg' },
  },
  {
    id: '14',
    title: 'Gestion durable des ressources naturelles',
    description: 'Le CREPID s\'engage dans la recherche et l\'identification des stratégies de gestion durables des ressources naturelles.',
*/
