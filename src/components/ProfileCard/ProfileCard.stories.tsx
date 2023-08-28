import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from '.';

export default {
  title: 'Components/ProfileCard',
  component:  ProfileCard,
  decorators: [
    (Story) => {
      return (
        <div style={{ marginTop: '300px' }}>
          <Story />
        </div>
      );
    }
  ]
} as Meta

export const Default:StoryObj = {
  
}