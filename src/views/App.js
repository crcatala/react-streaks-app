import React, { Component } from "react";
import HabitList from "../components/HabitList";
import AppTheme from "../components/AppTheme";
import Navigation from "../components/Navigation";
import SettingsControls from "../components/SettingsControls";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/src/uncompressed/TweenMax";
// import { TweenMax } from "gsap/all";
import ThemeControls from "../components/ThemeControls";
import { rootStore } from "../store";
import { observer } from "mobx-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsVisible: false,
      habits: [
        { id: 1, name: "Gratitude" },
        { id: 2, name: "Meditate" },
        { id: 3, name: "Vision Board" },
        { id: 4, name: "Brew Coffee" },
        { id: 5, name: "Walk" }
      ]
    };
  }

  openSettings() {
    console.log("openSettings");
    // rootStore.settingsControlsToggle();
    this.setState({ settingsVisible: true });
  }

  closeSettings() {
    // rootStore.settingsControlsToggle();
    this.setState({ settingsVisible: false });
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.openSettings}>testttinnggggg</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HabitList list={this.state.habits} />
        </div>
        <Navigation onSettingsClicked={this.openSettings.bind(this)} />
        {/* {rootStore.settingsControlsVisible && (
          <SettingsControls onClose={this.closeSettings} />
        )} */}
        <Transition
          timeout={1000}
          appear
          mountOnEnter
          unmountOnExit
          enter
          // in={rootStore.settingsControlsVisible}
          in={this.state.settingsVisible}
          onEntering={(node, isAppearing) => {
            console.log("onEntering", node, isAppearing);
            TweenMax.to(node, 0.5, {
              x: 0,
              autoAlpha: 1
              // onComplete: done
            });
          }}
          onExiting={(node, isAppearing) => {
            TweenMax.to(node, 0.5, {
              x: 100,
              autoAlpha: 0
              // onComplete: done
            });
          }}
          // addEndListener={(node, done) => {
          //   TweenMax.to(node, 0.5, {
          //     x: rootStore.settingsControlsVisible ? 0 : 100,
          //     autoAlpha: rootStore.settingsControlsVisible ? 1 : 0,
          //     onComplete: done
          //   });
          // }}
        >
          <SettingsControls onClose={this.closeSettings.bind(this)} />
        </Transition>
        {rootStore.themeControlsVisible && <ThemeControls />}
        <AppTheme />
      </div>
    );
  }
}

export default observer(App);
