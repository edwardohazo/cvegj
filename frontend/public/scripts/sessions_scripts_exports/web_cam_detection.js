export default function WebCamDetection (id) {
    const $video = document.getElementById(id);
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((stream)=>{
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`);
            console.log(`Error:${err}`);
        });
}