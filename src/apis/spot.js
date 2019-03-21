import axios from 'axios';


//const KEY= 'BQCya88OYZgymGzEKmoG7VBxbIYeRNRFqraP7WtaK4iE-fyVfe8VPiWIggoF0BQSNqhENqjhjR6WFjVxcuT-IbHg9qmR4trCdxDOpda6FONX3rDascUvsjYtz4e4QpnAxzRbJjOplLMaAcKxdPTWEC1k21_zxbJYvtu4o5p00m81Vhw';

export default axios.create({

    baseURL: 'https://api.spotify.com/v1',
    /*headers:{
        Authorization: `Bearer ${KEY}`
    },*/
    params:{
        limit: 30
    }
});