import ModelBase from 'App/ModelBase';
import { QualityModel } from 'Quality/Quality';
import CustomFormat from 'typings/CustomFormat';
import AppSectionState, {
  AppSectionFilterState,
  AppSectionItemState,
  Error,
} from './AppSectionState';

export interface StatusMessage {
  title: string;
  messages: string[];
}

export interface Queue extends ModelBase {
  quality: QualityModel;
  customFormats: CustomFormat[];
  size: number;
  title: string;
  sizeleft: number;
  timeleft: string;
  estimatedCompletionTime: string;
  status: string;
  trackedDownloadStatus: string;
  trackedDownloadState: string;
  statusMessages: StatusMessage[];
  errorMessage: string;
  downloadId: string;
  protocol: string;
  downloadClient: string;
  outputPath: string;
  artistId?: number;
  albumId?: number;
}

export interface QueueDetailsAppState extends AppSectionState<Queue> {
  params: unknown;
}

export interface QueuePagedAppState
  extends AppSectionState<Queue>,
    AppSectionFilterState<Queue> {
  isGrabbing: boolean;
  grabError: Error;
  isRemoving: boolean;
  removeError: Error;
}

interface QueueAppState {
  status: AppSectionItemState<Queue>;
  details: QueueDetailsAppState;
  paged: QueuePagedAppState;
}

export default QueueAppState;
