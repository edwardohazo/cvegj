export default function ResponsiveMedia (id, mq, mobileContent, desktopContent) {
    let breakpoint = window.matchMedia(mq);

    const responsive = (e) => {

        if (e.matches) {
            document.getElementById(id).innerHTML = desktopContent;
        } else {
            document.getElementById(id).innerHTML = mobileContent;
        }

    }
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}