// const POST_URL = "https://fierce-hamlet-12953.herokuapp.com/api/marker";
const POST_URL = "http://192.168.1.134:2000/api/marker";

export const postMarkerToServer = async ({ x, y, lat, lng }) => {
  const response = await fetch(POST_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      marker: {
        x: x,
        y: y,
        lat: lat,
        lng: lng,
      },
    })
  })

  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  console.log(body.msg);
};