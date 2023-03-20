import Sidebar from "./Sidebar";
import Main from "./Main";

function Layout(props){
    return(
        <div className="layout-wrap">
            <Sidebar/>
            <Main {...props}>
                {props.children}
            </Main>
        </div>
    )
}

export default Layout;