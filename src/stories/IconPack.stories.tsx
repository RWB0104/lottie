import IconCard from '@lottie/components/IconCard/IconCard';
import { icons } from '@lottie/util/variables';
import { Meta } from '@storybook/react';
import { ReactNode } from 'react';

const meta = {
	// argTypes: { backgroundColor: { control: 'color' } },
	component: IconCard,
	parameters: { layout: 'centered' },
	tags: [ 'autodocs' ],
	title: 'Example/IconCard'
} satisfies Meta<typeof IconCard>;

export default meta;

export function All(): ReactNode
{
	return (
		<div>
			{icons.map((icon) => <IconCard iconName={icon} key={icon} />)}
		</div>
	);
}