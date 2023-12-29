const URL_API = 'http://localhost:4000';

export const getPlaces = async () => {
  try {
    const res = await fetch(`${URL_API}/places`);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const getPlace = async (id) => {
  try {
    const res = await fetch(`${URL_API}/places/${id}`);
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const createPlace = async (placeData) => {
  try {
    const res = await fetch(`${URL_API}/places`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(placeData)
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const updatePlace = async (id, placeData) => {
  try {
    const res = await fetch(`${URL_API}/places/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(placeData)
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}

export const deletePlace = async (id) => {
  try {
    const res = await fetch(`${URL_API}/places/${id}`, {
      method: 'DELETE'
    });
    return res.json();
  } catch (err) {
    throw new Error(err)
  }
}