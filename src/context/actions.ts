import { lensProp, set } from 'ramda';
import { State } from './Context';

export const setTarget = set(lensProp<State>('target'));
export const setSource = set(lensProp<State>('source'));
