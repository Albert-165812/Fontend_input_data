import axios from 'axios'
const Axios = (data) => {
    console.log(data)
    axios.post('/msg',{data})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

export default Axios