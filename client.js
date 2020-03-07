const assert = require("assert");
const Request = require("./request");

module.exports = class PhemexClient {
  constructor(apiKey, secret, livenet=false) {
    assert(apiKey, "Api Key is Required.");
    assert(secret, "Secret is Required.");

    this.request = new Request(...arguments);
  };

  async QueryClientAndWallets() {
    return await this.request.getRequest("/phemex-user/users/children");
  }
}