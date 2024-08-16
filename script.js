function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// const content = document.getElementsByClassName('article-container');
// let skills = ["HTML","CSS","Angular","Reactjs","JavaScript"]
// for (let i = 0; i < skills.length(); i++) {
//     const article = `
//         <article>
//             <img src="./Assests/Checkmark2.png" alt="Checkmark" class="icon">
//             <div>
//                 <h3>${skills[i]}</h3>
//                 <p>Experienced</p>
//             </div>
//         </article>
//     `;
//     content.innerHTML += article;
// }