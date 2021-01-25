# Lazy todo app - React

This is a copy of my lazy todo app made in React.js.

### Pros of using React in making this app:
- Use of JSX and functional components is very easy and fast.
- I am most familiar with React, so this was extremely easy for me to do, in fact it took my an hour to finish the app.
- create-react-app makes for easy startup and debugging with it's built in scripts.
- The delivery of the app was extremely straightforward.
- useEffect and other hooks are very nice.
- React itself is much more free form in the way that handles project structure. This is nice because I can manually create my own tools and utilities that follow *my* architecture instead of following what the creators think should happen.
- One, maybe two files per component - the component itself, and maybe a stylesheet.
- The rendered app is clean, no random data- attributes or weird nesting, making debugging really easy to do.
- The devtools just work and are very clear.
- TypeScript integration is flawless.

### Cons of using React:
- After using Angular and Vue, React's state management feels a bit antiquated. Even using hooks, interacting with state feels weird. I didn't use any class components, but if I did, it wouldn't solve the weirdness of the React lifecycle. The fact that all state actions are asynchronus causes the need for a lot of weird workarounds.
- create-react-app feels very hollow during set up. The most I can do to properly customize setup is to use templates that I either have to create manually, or find one that someone else has created that would work in my situation.
- Context is nice, but a bit too much to set up for such a small project, but I still don't like needing to do prop drilling for things that should be handled by some sort of service or util that can interact across components. I could have used recoil or redux, but again, it's such a small project that these feel like overkill.

All in all, I think I still prefer React after playing with the others. Even though JSX is still transpiled to JS, there's never the question of "Is this actually what I think it is?" when interpolating data or passing it down through props. Using TypeScript actually has an effect on what I do and how I structure my app, making it easier to tell what the data is and how it's getting passed around. My biggest issue with React right now is state. Firstly, it's asynchronus, which causes a hell of a lot of confusion when you try to set a value and use it immediately afterwards. So many times, this has caused me to need to write some sort of workaround, even to the point of using setTimeout with a timeout duration of 0 in order to resolve the value properly. It's inane and frustrating. That said, those frustrations can just be hoisted into a hook of some sort that allows you to reuse the same workaround whenever you need it. Which brings me to the next thing that makes me prefer React: Hooks. Custom hooks are amazing and knowing how to use them can make React development so simple and smooth. While I didn't use any here, again due to the fact that it's a small project, I maintain that they are a must have in your project.