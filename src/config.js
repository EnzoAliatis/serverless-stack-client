export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_GYUw5QSMCaiWkLPcRKIxdtrb004I7IA1w0",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-enzo"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pxy2ow5lic.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jCYxtuGSY",
    APP_CLIENT_ID: "1c46vkd3107h5lj5dmeve610t5",
    IDENTITY_POOL_ID: "us-east-1:4e72e72c-f38a-4e9a-9cdd-d4dfa16e1871"
  }
}