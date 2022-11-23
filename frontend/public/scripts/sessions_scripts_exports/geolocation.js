export default function GetGeolocation (id) {
    const $id = document.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = (position) => {
        let coords = position.coords;
        console.log(coords.latitude)
        $id.innerHTML = 
        `<p>Your current position is:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud <b>${coords.longitude}</b></li>
            <li>Presition: <b>${coords.accuracy}<b/>mts</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">View Location</a>`;
        

        console.log(position);
    }

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(err);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}