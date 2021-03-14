import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/about/About";
import ContactMe from "../components/contact-me/ContactMe";
import Gallery from "../components/gallery/Gallery";
import GalleryComponent from "../components/gallery/GalleryComponent";
import StoryComponent from "../components/layout/StoryComponent";
// import TravelStories from "../components/travel-stories/TravelStories";

const lastPage = (path, history) => {
    if (path === null) {
        return history.push("/");
    } else return history.push(path);
};

const Routes = ({ history }) => {
    useEffect(() => {
        lastPage(localStorage.getItem("page"), history);
    }, [history]);
    return (
        <div className='main-container'>
            <Switch>
                <Route exact path='/about' component={About} />
                {/* <Route exact path='/travel-stories' component={TravelStories} /> */}
                <Route exact path='/contact-me' component={ContactMe} />
                <Route exact path='/story' component={StoryComponent} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/gallery/:id' component={GalleryComponent} />
            </Switch>
        </div>
    );
};

export default Routes;
