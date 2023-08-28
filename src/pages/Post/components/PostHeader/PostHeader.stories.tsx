import type { Meta, StoryObj } from '@storybook/react';
import {  PostHeader, PostHeaderProps } from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/PostHeader',
  component:  PostHeader,
  args: {
    title: 'Como utilizar StoryBook',
    authorName: 'Vitor Fraga',
    authorProfileLink: '#',
    comments: 2,
    date: '2021-01-01',
    gitLink: "#",
    isLoading: false,
  },
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <div style={{ marginTop: '300px' }}>
            <Story />
          </div>
        </MemoryRouter>
      );
    }
  ]
} as Meta<PostHeaderProps>

// export const decorators = [
//   (Story) => {
//     return (
//       <MemoryRouter initialEntries={['/']}>
//         <Story />
//       </MemoryRouter>
//     );
//   }
// ]


export const Default:StoryObj = {}