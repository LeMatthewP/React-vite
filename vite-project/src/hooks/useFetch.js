// import { useEffect } from "react";

// export const useFetch = (url) => {
    
//     const [state, setState] = useState({
//         data:null,
//         isLoading :true,
//         hasError : null,

//     })

//     const getFetch = async () => {
//         const resp = await fetch(url);
//         const data = await resp.json();
//         setState({
//             data:data,
//             isLoading :false,
//             hasError : null,
//         });
//         console.log(data);
//     }


//     useEffect(()=>{
//         getFetch();
//     },(url));

// return {
//     data:state.data,
//     isLoading :state.isLoading,
//     hasError : state.hasError,
// };
// }