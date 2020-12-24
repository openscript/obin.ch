import { PropsWithChildren } from 'react';

export type Props<T = unknown> = PropsWithChildren<T> & { className?: string };
