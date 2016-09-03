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
            {props.from}
            </Link>
            &nbsp;
            {props.title}
            &nbsp;
            {props.content}
        </div>
    )
}

var InboxList = function(props){
    console.log("LOOOOOOOP!");
    var display = [];
    for(var i=0;i<2;i++ ){
        
        display.push(<li>{props.inbox[i].from}</li>);
        display.push(<li>{props.inbox[i].to}</li>);
        display.push(<li>{props.inbox[i].title}</li>);
        display.push(<li>{props.inbox[i].content}</li>);
    }
    
    return(
    <div>
    <h1>This is where the InboxList is</h1>
    <ul>
    {display}
    </ul>
    
    </div>    
    )
};

var InboxListContainer = function(props){
  return(
      <div>
      <h1>Inbox Route</h1>
      <InboxList inbox={INBOX.inbox}/>
      </div>)  
};


var SpamList = function(props){
    
    console.log(props);
    return(
    <div>
    <h1>This is where the SpamList is</h1>
    <ul>
    </ul>
    
    </div>    
    )
}

var SpamListContainer = function(props){
    console.log(INBOX.spam);
    return(
        <div>
        <h1>Spam Route</h1>
        <SpamList inbox={INBOX.spam}/>
        </div>
        )
}

var HomePage = function(props){
    console.log(props.children);
    return(
        <div>
        <h1>Your Email</h1>
        <h1>This is Loading</h1>
        <p>
            <Link to={'/inbox/'}>Click to go to inbox</Link>
        </p>
        <p>
            <Link to={'/spam/'}>Click to go to spam folder</Link>
        </p>
        </div>
    )
}

var routes=(
    <Router history={hashHistory}>
    <Route path="/" component={HomePage}></Route>
    <Route path="/inbox" component={InboxListContainer}></Route>
    <Route path="/spam" component={SpamListContainer}></Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});