# React Native Starter :rocket:

## _Make a brew - because half your work's already done!_ :coffee:

A React Native starter repo with the aim to implement "scalable gold star" standards from the get go giving some examples with a couple of screens.

## Intro / Motivation

This hopefully exists as a _"living document"_ in the sense that as popular patterns change and packages update, this starter app will also update.

To be honest it exists to fill that gap when you want to start a new side project / hobby project but you have that cracking idea but you say: **"I proper can't be bothered setting everything up and putting boilerplate in..."**

## Getting Started

For the love of god, follow everything here: https://facebook.github.io/react-native/docs/getting-started

> Some helpful things you might forget to do:
>
> - iOS: `cd ios`, `pod install` - get your ios pods installed - sometimes `pod repo update` is required too.
> - Android: `cd android`, `./gradlew clean` - these are useful when Android bricks

You should be able to follow the getting started documents and then run the commands from the package.json to get going.

A nice workflow would be: `yarn ios` or `yarn android` with another terminal tab running the packager `yarn packager`, ios will automatically open a simulator, android won't.

You can also run the app through the respective IDEs in Android Studio and XCode which will look after the bundler, but they're both monsters for processing power.

For debugging life is going to be harder without [React Native Debugger]('https://github.com/jhen0409/react-native-debugger')

There's an example auth server in `server/` which is it's own express app. To get that running it's the usual `yarn` then `yarn dev` to get it going :thumbsup:

## Outline

This starter will setup you up with a project has:

1. Structure/Architecture with Prettier and ESLint
2. React Native
3. Redux, Redux-Thunk
4. React Native Debugger
5. React Navigation
6. Axios
7. Formik and Auth forms
8. Basic screens

In the future maybe? :thinking:

- Jest (Unit & Integration Tests)
- TypeScript
- Detox/Appium (E2E tests)
- Fastlane?
- Project.pbx setup?
- Analytics?
- Crashes? Sentry?
- Deeplinks?
- Redux Persist/Offline?
- Firebase? Push Notifications?

## Reccomended VS Code Extensions

> These are the ones that I've found help with the dev workflow - you might equally find them not so helpful.

- Auto Close Tag _(Essential)_
- Auto Rename Tag _(Essential)_
- Babel JavaScript _(Essential)_
- ESLint _(Essential)_
- Prettier _(Essential)_
- Code Spell Checker _(Handy)_
- Color Highlight _(Handy)_
- Partial Diff _(Handy allows selection of text CTRL+C and then right click on another selection to - get a git like compare view)_
- Path Intellisense _(Handy)_
- Rainbow Brackets _(Depends on how much you like colours - but it's quicker nested function identification)_
- vscode-icons _(VSCode's icons have come along way but these are still a litle better)_
- GitLens _(This can be a bit resource intensive)_

## Assumptions

- You enjoy single line quotes, no semi-colon enforcement and pretty much all the auto-formatting from Prettier out of the box.
- You agree with the current ESLint ruling for both React / React Native / React Hooks
- You're potentially going to require that your state/ folder is going to be shared and you prefer the logic siloed out.
- You're ok with having a font added by default, as it can be a quirk to setup and it'll show you where it needs to go.

## Troubleshooting

- Network requests not showing in React Native Debugger?
  This could be for a multitude of reasons but more than likely you haven't right clicked in the left side / state window and clicked 'Enable Network Inspect'. **I think it's silly as well but it's what we've got**.

- If you're confused why you can't see you're state/state tree in React Native Debugger -> make sure the redux tools aren't on auto select as it might default to React Navigation rather than the redux state!

## Useful links

### Adding custom fonts?

https://github.com/facebook/react-native/issues/25852

Don't forget to run `npx react-native link` afterwards

### Generating icons?

https://medium.com/better-programming/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c

iOS: https://appiconmaker.co/Home/Index/b1b50d72-22a5-4939-98fb-6acb7c3c6f6d TLDR: Pop em in the AppIcon in Image.xcassets inside of XCode.
Android:http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html TLDR: Make the square ones, download them rounded, check they don't go over the edges either!

### Generating screenshots?

https://help.apple.com/app-store-connect/#/devd274dd925 Is useful for screenshot sizing

https://facebook.design/devices Is useful for getting device frames for the screenshots

### Want a splash screen?

https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9 for the splashscreen implementation
