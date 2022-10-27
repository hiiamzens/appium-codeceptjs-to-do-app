exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:/Users/y.huynhlethien/IrisHuynh/Company-Training/Appium/appium-todolist/apk/ToDoList.apk',
      platform: 'Android',
      device: 'emulator-5556' 
    }, 
    AssertWrapper : {
      require: 'codeceptjs-assert'
    }
  },
  include: {
    I: './steps_file.js',
    env: {
      TIMEOUT: 3000
    },
    baseScreen: './screens/base-screen.js',
    detailScreen: './screens/details-task-screen.js',
    homeScreen: './screens/home-screen.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/add-task-steps.js', 
      './step_definitions/update-task-steps.js', 
      './step_definitions/delete-task-steps.js', 
      './step_definitions/common-steps.js']
  },
  plugins: {
    allure: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: '/tests/*.js',
  name: 'appium-todolist'
}