/**
 * 아이콘 카드 컴포넌트
 *
 * @author RWB
 * @since 2024.03.07 Thu 15:35:28
 */

import DotLottieIcon from '@lottie/components/DotLottieIcon';
import LottieIcon from '@lottie/components/LottieIcon';
import { icons } from '@lottie/util/variables';
import classNames from 'classnames/bind';
import { ReactNode, useCallback } from 'react';

import styles from './IconCard.module.scss';

const cn = classNames.bind(styles);

export interface IconCardProps
{
	/**
	 * 아이콘 이름
	 */
	iconName: typeof icons[number];
}

/**
 * 아이콘 카드 컴포넌트 반환 메서드
 *
 * @param {IconCardProps} param0: IconCardProps 객체
 *
 * @returns {ReactNode} ReactNode
 */
export default function IconCard({ iconName }: IconCardProps): ReactNode
{
	const handleClick = useCallback(async (ext: string) =>
	{
		const fileName = `${iconName}.${ext}`;

		const response = await fetch(`/lottie/${fileName}`);
		const blob = await response.blob();

		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = fileName;

		document.body.appendChild(a);
		a.click();

		setTimeout(() =>
		{
			URL.revokeObjectURL(url);
		}, 1000);
	}, [ iconName ]);

	return (
		<div className={cn('container')} data-component='IconCard'>
			<div className={cn('card')}>
				<p className={cn('title')}>lottie</p>

				<LottieIcon className={cn('lottie')} iconName={iconName} />

				<button className={cn('button')} onClick={() => handleClick('json')}>{iconName}</button>
			</div>

			<div className={cn('card')}>
				<p className={cn('title')}>dotLottie</p>

				<DotLottieIcon className={cn('lottie')} iconName={iconName} />

				<button className={cn('button')} onClick={() => handleClick('lottie')}>{iconName}</button>
			</div>
		</div>
	);
}