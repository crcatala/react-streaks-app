import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/src/uncompressed/TweenMax";

export default function TransitionScaleFade(props) {
  const offset = 100;
  const durationInSeconds = 0.25;

  return (
    <Transition
      timeout={durationInSeconds * 1000 + 1}
      appear
      mountOnEnter
      unmountOnExit
      in={props.in}
      onEnter={node => {
        TweenMax.to(node, 0, { scale: 1.2, autoAlpha: 0 });
        TweenMax.to(node, durationInSeconds, { scale: 1, autoAlpha: 1 });
      }}
      onExiting={node => {
        TweenMax.to(node, durationInSeconds, { scale: 1.2, autoAlpha: 0 });
      }}
    >
      {props.children}
    </Transition>
  );
}
