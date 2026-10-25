export interface ExternalPost {
  title: string
  description: string
  date: string
  readingTime: string
  url: string
  source: string
  tags: string[]
}

export const externalPosts: ExternalPost[] = [
  {
    title: 'The Illusions of Data Scarcity',
    description:
      'There\u2019s a lie we tell ourselves in the Nigerian tech ecosystem, and we tell it so often it now sounds like a fact: we don\u2019t have data.',
    date: '2026-10-24',
    readingTime: '7 min read',
    url: 'https://medium.com/@chimaifeanyi62/the-illusions-of-data-scarcity-f4341e54abe6',
    source: 'Medium',
    tags: ['Data', 'Machine Learning', 'AI'],
  },
]
