import { createAction } from 'redux-actions';

export function createActionTypes(prefix: string) {
  return [`${prefix}Request`, `${prefix}Success`, `${prefix}Fail`];
}

export function createActionTypesExtend(prefix: string) {
  return [`${prefix}`, `${prefix}Added`, `${prefix}Removed`];
}

export function createReduxActions(prefix: string) {
  return [
    createAction(`${prefix}Request`),
    createAction(`${prefix}Success`),
    createAction(`${prefix}Fail`),
  ];
}

export function createReduxActionsExtend(prefix: string) {
  return [
    createAction(`${prefix}`),
    createAction(`${prefix}Added`),
    createAction(`${prefix}Removed`),
  ];
}
