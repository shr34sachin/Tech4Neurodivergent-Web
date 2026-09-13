import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/resources/what-does-neurodivergent-mean',
        destination: '/guides/what-does-neurodivergent-mean',
        permanent: true,
      },
      {
        source: '/resources/assistive-technology-in-special-education',
        destination: '/guides/assistive-technology-in-special-education',
        permanent: true,
      },
      {
        source: '/resources/low-tech-vs-high-tech-assistive-technology',
        destination: '/guides/low-tech-vs-high-tech-assistive-technology',
        permanent: true,
      },
      {
        source: '/resources/visual-structure-and-task-analysis-autism',
        destination: '/guides/visual-structure-and-task-analysis-autism',
        permanent: true,
      },
      {
        source: '/visual-structure-and-task-analysis-autism',
        destination: '/guides/visual-structure-and-task-analysis-autism',
        permanent: true,
      },
      {
        source: '/low-tech-vs-high-tech-assistive-technology',
        destination: '/guides/low-tech-vs-high-tech-assistive-technology',
        permanent: true,
      },
      {
        source: '/assistive-technology-in-special-education',
        destination: '/guides/assistive-technology-in-special-education',
        permanent: true,
      },
      {
        source: '/what-does-neurodivergent-mean',
        destination: '/guides/what-does-neurodivergent-mean',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/guides',
        permanent: true,
      },
          {
        source: '/resources/interoception-and-alexithymia-autism',
        destination: '/guides/interoception-and-alexithymia-autism',
        permanent: true,
      },
      {
        source: '/interoception-and-alexithymia-autism',
        destination: '/guides/interoception-and-alexithymia-autism',
        permanent: true,
      },
          {
        source: '/resources/aac-fitzgerald-key-color-coding',
        destination: '/guides/aac-fitzgerald-key-color-coding',
        permanent: true,
      },
      {
        source: '/aac-fitzgerald-key-color-coding',
        destination: '/guides/aac-fitzgerald-key-color-coding',
        permanent: true,
      },
          {
        source: '/resources/assistive-tech-for-down-syndrome',
        destination: '/guides/assistive-tech-for-down-syndrome',
        permanent: true,
      },
      {
        source: '/assistive-tech-for-down-syndrome',
        destination: '/guides/assistive-tech-for-down-syndrome',
        permanent: true,
      },
          {
        source: '/resources/cognitive-accessibility-digital-flashcards',
        destination: '/guides/cognitive-accessibility-digital-flashcards',
        permanent: true,
      },
      {
        source: '/cognitive-accessibility-digital-flashcards',
        destination: '/guides/cognitive-accessibility-digital-flashcards',
        permanent: true,
      },
          {
        source: '/resources/adaptive-tech-for-cerebral-palsy',
        destination: '/guides/adaptive-tech-for-cerebral-palsy',
        permanent: true,
      },
      {
        source: '/adaptive-tech-for-cerebral-palsy',
        destination: '/guides/adaptive-tech-for-cerebral-palsy',
        permanent: true,
      },
      {
        source: '/resources/high-contrast-large-target-interfaces',
        destination: '/guides/high-contrast-large-target-interfaces',
        permanent: true,
      },
      {
        source: '/high-contrast-large-target-interfaces',
        destination: '/guides/high-contrast-large-target-interfaces',
        permanent: true,
      },
      {
        source: '/resources/single-tap-vs-complex-aac-dual-barriers',
        destination: '/guides/single-tap-vs-complex-aac-dual-barriers',
        permanent: true,
      },
      {
        source: '/single-tap-vs-complex-aac-dual-barriers',
        destination: '/guides/single-tap-vs-complex-aac-dual-barriers',
        permanent: true,
      },
      {
        source: '/resources/functional-academics-special-education',
        destination: '/guides/functional-academics-special-education',
        permanent: true,
      },
      {
        source: '/functional-academics-special-education',
        destination: '/guides/functional-academics-special-education',
        permanent: true,
      },
      {
        source: '/guides/functional-academics-concrete-math-literacy',
        destination: '/guides/functional-academics-special-education',
        permanent: true,
      },
      {
        source: '/guides/visual-scaffolding-down-syndrome',
        destination: '/guides/visual-scaffolding-auditory-memory-down-syndrome',
        permanent: true,
      },
      {
        source: '/guides/total-communication-speech-aids',
        destination: '/guides/total-communication-mid-tech-speech-aids',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
