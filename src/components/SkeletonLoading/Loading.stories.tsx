import type { Meta, StoryObj } from '@storybook/react';
import SkeletonLoading from ".";
import { SkeletonLoadingProps } from '.'

export default {
  title: 'Components/Loading',
  component: SkeletonLoading,
  args: {
    height: 18,
    lines: 8,
    spacings: 4
  }
} as Meta<SkeletonLoadingProps>

export const Default:StoryObj = {}