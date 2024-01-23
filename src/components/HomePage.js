import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from'./EmployeeList';


function HomePage() {
    return (
        <div style={{
            border:"2px solid yellow",
            display: "flex",
            marginLeft:"1px"
    
            }}>
            <h2> HomePage </h2>
            <Header/>
            <SearchBar/>
            <EmployeeList/>
        </div>
    );
}
export default HomePage;