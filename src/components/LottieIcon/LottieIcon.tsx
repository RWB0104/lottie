/**
 * lottie 아이콘 컴포넌트
 *
 * @author RWB
 * @since 2024.03.07 Thu 01:08:23
 */

import { icons } from '@lottie/util/variables';
import Lottie, { LottieComponentProps } from 'lottie-react';
import { ReactNode, useEffect, useState } from 'react';

export interface LottieIconProps extends Omit<LottieComponentProps, 'animationData'>
{
	/**
	 * 아이콘 이름
	 */
	iconName: typeof icons[number];
}

/**
 * lottie 아이콘 컴포넌트 반환 메서드
 *
 * @param {LottieIconProps} param0: LottieIconProps
 *
 * @returns {ReactNode} ReactNode
 */
export default function LottieIcon({ iconName, ...props }: LottieIconProps): ReactNode
{
	const [ state, setState ] = useState();

	useEffect(() =>
	{
		const handle = async (): Promise<void> =>
		{
			const response = await fetch(`/lottie/${iconName}.json`);
			const json = await response.json();

			setState(json);
		};

		handle();
	}, [ iconName ]);

	return (
		<Lottie animationData={state} data-component='LottieIcon' {...props} />
	);
}