export type LoadingStatus = 'isProcessing' | 'isRejected';

export interface LoadingInitState {
  status: LoadingStatus;
}
