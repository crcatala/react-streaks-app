import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/src/uncompressed/TweenMax";

export default function TransitionFromBottom(props) {
  const offset = 50;
  const durationInSeconds = 0.2;

  return (
    <Transition
      timeout={durationInSeconds * 1000 + 1}
      appear
      mountOnEnter
      unmountOnExit
      in={props.in}
      onEnter={(node, isAppearing) => {
        TweenMax.to(node, 0, { y: offset, autoAlpha: 0 });
        TweenMax.to(node, durationInSeconds, { y: 0, autoAlpha: 1 });
      }}
      onExiting={(node, isAppearing) => {
        TweenMax.to(node, durationInSeconds, { y: offset, autoAlpha: 0 });
      }}
    >
      {props.children}
    </Transition>
  );
}
