import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

import LottieIcon from '../components/LottieIcon';

const meta = {
	// argTypes: { backgroundColor: { control: 'color' } },
	component: LottieIcon,
	parameters: { layout: 'centered' },
	tags: [ 'autodocs' ],
	title: 'Example/LottieIcon'
} satisfies Meta<typeof LottieIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export function All(): ReactNode
{
	return <LottieIcon iconName='lottie-logo' />;
}