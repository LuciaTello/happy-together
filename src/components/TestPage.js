import {withRouter} from "react-router-dom";
import React, { useEffect } from 'react'


function TestPage() {


useEffect(() => {
        fetch("http://localhost:8080/services/checkPlaylists")
    }, [])


	return (
        <div>
            <h1>Test</h1>
        </div>
    );
}

export default withRouter(TestPage);