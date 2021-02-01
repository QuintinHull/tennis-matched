import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import GroupView from "./components/GroupView";
import EditGroup from "./components/EditGroup";
import SkillGuide from "./components/SkillGuide";
import EventView from "./components/EventView";
import SkillEventView from "./components/SkillEventView";
import CreateEvent from "./components/CreateEvent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/groups/:id">
            <GroupView />
          </Route>
          <Route exact path="/groups/edit/:id">
            <EditGroup />
          </Route>
          <Route path="/skill-guide">
            <SkillGuide />
          </Route>
          <Route exact path={`/events/:id`}>
            <EventView />
          </Route>
          <Route path={`/events/skill/:id`}>
            <SkillEventView />
          </Route>
          <Route exact path={`groups/:id/create`}>
            <CreateEvent />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
