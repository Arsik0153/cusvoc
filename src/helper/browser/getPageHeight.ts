export default function getPageHeight(): number {
    const { body } = document;
    const { documentElement } = document;
    const html = documentElement;

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
    );
}
