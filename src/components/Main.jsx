const Main = () => {
  return (
    <>
        <div className="container">
            <div className="p-5 text-center bg-light-dark">
                <h1 className="text-light">Stock Prediction Portal </h1>
                <p className="text-light lead"> This stock prediction application utilizes machines learning techniques, spécifically employing Keras, and LSTM model, integrated within the Django Framework. It forcasts future stock Prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analyst to inform trading and investment decisions.</p>
                <a className="btn btn-info" href="">Login</a>
            </div>

        </div>
    </>
  )
}
export default Main