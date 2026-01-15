const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");

console.log(`number of categories: ${items.length}`);

items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("li").length;
    console.log(`category: ${title}`);
    console.log(`elements: ${elements}`);
});