import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/src/uncompressed/TweenMax";

export default function TransitionFromLeft(props) {
  const offset = 100;

  return (
    <Transition
      timeout={1000}
      appear
      mountOnEnter
      unmountOnExit
      in={props.in}
      onEnter={(node, isAppearing) => {
        TweenMax.to(node, 0, { x: offset, autoAlpha: 0 });
        TweenMax.to(node, 0.5, { x: 0, autoAlpha: 1 });
      }}
      onExiting={(node, isAppearing) => {
        TweenMax.to(node, 0.5, { x: offset, autoAlpha: 0 });
      }}
    >
      {props.children}
    </Transition>
  );
}
