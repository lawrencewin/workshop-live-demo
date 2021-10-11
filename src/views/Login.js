export default function Login () {
    return (
        <div className="App-content">
            <h1 className="Content-header">Login!</h1>
            <input type="text" className="Content-input" placeholder="Username..." />
            <input type="password" className="Content-input" placeholder="Password..." />
            <button className="Content-button filled">Next</button>
        </div>
    )
}