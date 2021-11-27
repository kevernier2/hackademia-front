import AddAnswer from "./pages/AddAnswer";
import CreateQuestion from "./pages/CreateQuestion";
import OrderAnswerGroups from "./pages/OrderAnswerGroups";
import EnterCode from "./pages/EnterCode";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/code"} component={EnterCode}/>
                    <Route path="/questions/:questionId/answers/add" component={AddAnswer}/>
                    <Route path="/questions/add" component={CreateQuestion}/>
                    <Route path="/questions/:questionId/order" component={OrderAnswerGroups}/><Route path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
