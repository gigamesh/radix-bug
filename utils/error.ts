export class ApiDataError extends Error {
  constructor(message?: string) {
    super(message || 'Server returned bad data');
    this.name = 'ApiDataError';
  }
}

export class UnsupportedConnectorError extends Error {
  constructor(message?: string) {
    super(message || 'Unsupported connector');
    this.name = 'UnsupportedConnectorError';
  }
}

export class UnsupportedChainError extends Error {
  constructor(message?: string) {
    super(message || 'Unsupported chain');
    this.name = 'UnsupportedChainError';
  }
}

export class FailedMediaUploadError extends Error {
  constructor(message?: string) {
    super(message || 'Failed to upload media');
    this.name = 'FailedMediaUploadError';
  }
}
