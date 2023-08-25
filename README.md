# Getting Started

## Install App dependencies

```bash
yarn install
cd ios/
bundle install
bundle exec pod install
```

## Install Detox dependencies

Follow the instructions from the [Detox Setup Guide](https://wix.github.io/Detox/docs/introduction/getting-started#detox-prerequisites)

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Build the application with Detox

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to build your _iOS_ app:

```bash
yarn run detox build --configuration ios.sim.debug
```

## Run the test suite

```bash
yarn run detox test --configuration ios.sim.debug
```

If everything is set up correctly, you should see the Simulator open and the app should be installed and start running.

# Assignment

Follow the instructions in `INSTRUCTIONS.md`

## Troubleshooting

### Saved Changes not showing up in the simulator

If the app doesn't automatically reload after saving changes in your IDE, you may need to manually refresh the Metro server. Simply click into the terminal that is running the Metro server and type "r" (for reload).

You should see `Loading from Metro` at the top of the simulator, then your changes should appear.
