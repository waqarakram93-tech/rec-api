import SearchBox from "./SearchBox";
//import './App.css';

const Home = () => {
    return (

        <div style={{ backgroundImage: `url("./images/bg.jpg"`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat' }}>
            <div className="first-row d-flex justify-content-center ">
                <div className="col-md-12 mt-3 d-flex justify-content-center " >
                    <img src="/images/food1.jpg" alt="recipe" />
                </div>
            </div>
            <div className="second-row mt-1">
                <div className="col-md-12  d-flex justify-content-center " >
                    <SearchBox />
                </div>

            </div>
            <div>
                <p className="third-row d-flex justify-content-center mt-1">Find your favourite Food Recipe</p>
            </div>

        </div>


    )
}

export default Home