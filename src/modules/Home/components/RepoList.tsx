import {Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import {RepoCard} from '../components/RepoCard';
import {RepoData} from './RepoCard.types';

const repoData: RepoData[] = [
  {
    id: '679483442d18f577612780a3',
    description: 'A feature-rich command-line audio/video downloader',
    fetchDate: '2025-01-25',
    githubUrl: 'https://github.com/yt-dlp/yt-dlp',
    language: 'python',
    name: 'yt-dlp',
    thumbnail: 'https://avatars.githubusercontent.com/u/79589310?v=4',
  },
  {
    id: '679483442d18f5776127809d',
    description: 'All Algorithms implemented in Python',
    fetchDate: '2025-01-25',
    githubUrl: 'https://github.com/TheAlgorithms/Python',
    language: 'python',
    name: 'Python',
    thumbnail: 'https://avatars.githubusercontent.com/u/20487725?v=4',
  },
  {
    id: '679483442d18f5776127809e',
    description:
      'AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.',
    fetchDate: '2025-01-25',
    githubUrl: 'https://github.com/Significant-Gravitas/AutoGPT',
    language: 'python',
    name: 'AutoGPT',
    isFavorite: true,
    thumbnail: 'https://avatars.githubusercontent.com/u/130738209?v=4',
  },
  {
    id: '679483442d18f5776127809c',
    description:
      'An opinionated list of awesome Python frameworks, libraries, software and resources.',
    fetchDate: '2025-01-25',
    githubUrl: 'https://github.com/vinta/awesome-python',
    language: 'python',
    name: 'awesome-python',
    thumbnail: 'https://avatars.githubusercontent.com/u/1503512?v=4',
  },
  {
    id: '679483442d18f5776127809b',
    description:
      'Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.',
    fetchDate: '2025-01-25',
    githubUrl: 'https://github.com/donnemartin/system-design-primer',
    language: 'python',
    name: 'system-design-primer',
    thumbnail: 'https://avatars.githubusercontent.com/u/11098337?v=4',
  },
];

export const RepoList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <RepoCard data={repoData} />
    </ScrollView>
  );
};
