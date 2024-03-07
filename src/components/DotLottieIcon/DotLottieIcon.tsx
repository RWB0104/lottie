/**
 * dotLottie 아이콘 컴포넌트
 *
 * @author RWB
 * @since 2024.03.07 Thu 15:32:56
 */

import { DotLottiePlayer, Props } from '@dotlottie/react-player';
import { basepath, icons } from '@lottie/util/variables';
import { ReactNode } from 'react';

export interface DotLottieIconProps extends Omit<Props, 'src'>
{
	/**
	 * 아이콘 이름
	 */
	iconName: typeof icons[number];
}

/**
 * dotLottie 아이콘 컴포넌트 반환 메서드
 *
 * @param {DotLottieIconProps} param0: DotLottieIconProps 객체
 *
 * @returns {ReactNode} ReactNode
 */
export default function DotLottieIcon({ iconName, autoplay = true, loop = true, ...props }: DotLottieIconProps): ReactNode
{
	return (
		<DotLottiePlayer autoplay={autoplay} data-component='DotLottieIcon' loop={loop} src={`${basepath}/${iconName}.lottie`} {...props} />
	);
}