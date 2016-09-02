var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var INBOX = {
    inbox: {
        0: {
            id: 0,
            from: "billg@microsoft.com",
            to: "TeamWoz@Woz.org",
            title: "Possible work opportunity",
            content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
        },
        1: {
            id: 1,
            from: "zuck@facebook.com",
            to: "TeamWoz@Woz.org",
            title: "Do you know PHP?",
            content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
        }
    },
    spam: {
        0: {
            id: 0,
            from: "ChEaPFl1ghTZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "WaNt CHEEp FlitZ",
            content: "Theyre CheEp"
        },
        1: {
            id: 1,
            from: "NiKEAIRJordanZ@hotmail.com",
            to: "TeamWoz@Woz.org",
            title: "JorDanz For SAle",
            content: "Theyre REELY CheEp"
        }
    }
}

var Link = router.Link;


var InboxContact = function(props){
    return(
        <div>
            <Link to={'/inbox/' + props.inbox.id}>
                {props.inbox.from}
            </Link>
            &nbsp;
            {props.inbox.title}
            &nbsp;
            {props.inbox.content}
        </div>
    )
}

var InboxContactList = function(props){
    var contacts = Object.keys(props.contacts).map(function(contactId,index){
       var contact = props.contacts[contactId];
       return(
        <li key={index}>
            <Contact from={contact.inbox.from} title={contact.inbox.title} content={contact.inbox.content}/>
        </li>
       )
    });
    
    return(
        <ul>
            {contacts}
        </ul>
    )
};

var InboxListContainer = function(){
  return <InboxContactList contacts= {INBOX.inbox}/>  
};

var HomePage = function(props){
    return(
        <div>
        <h1>Your Email</h1>
        {props.children}
        </div>
    )
}

var routes=(
    <Router history={hashHistory}>
    <Route path="/" component={HomePage}></Route>
    <Route path="/inbox" component={InboxListContainer}></Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});