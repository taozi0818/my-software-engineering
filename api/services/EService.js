class BaseError {
  constructor(message) {
    this.message = message || 'UNKNOWN_TYPE';
  }

  toJSON() {
    return { error: this.message };
  }
}

class RequestError extends BaseError {
}

function request(message) {
  return new RequestError(message);
}

const E_PASSWORD = request('E_PASSWORD');
const E_NO_USER = request('E_NO_USER');

module.exports = {
  BaseError,
  RequestError,
  E_PASSWORD,
  E_NO_USER
};
