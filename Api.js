const link = "https://api.durlavparajuli.com.np/api";


export const fetchData = async(endpoint)=>{
    const res = await fetch(`${link}/${endpoint}`);
    const data = await res.json();
    return data;
}

export const postData = async (endpoint, data) => {
    const res = await fetch(`${link}/${endpoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to post data');
    }

    return await res.json();
};

export const loginData = async (endpoint, data) => {
    const res = await fetch(`${link}/${endpoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

      if(res.ok)
      {
        console.log(data);
        localStorage.setItem("token",dd.token);
        // navigate("/dashboard");
        window.location.href= "/dashboard"
      }
      else{
        console.log("error", data);
      }

    return await res.json();
};